import React, { useContext, type ReactElement } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  useTheme,
  styled,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { SignInButton } from "./SignInButton";

import { useIsAuthenticated, useHexOpacity } from "../../hooks";

import TokenProvider from "../../providers/tokenProvider";

import LogoSmall from "./LogoSmall";
import Avatar from "./Avatar";
import { UserProvider } from "../../providers/userProvider";

import AuthenticatedTemplate from "../auth/AuthenticatedTemplate";
import UnauthenticatedTemplate from "../auth/UnauthenticatedTemplate";

import { ColorModeContext } from "../../theme/customTheme";

const pages = [
  { name: "Home", url: "/", requiresAuth: false },
  { name: "About", url: "/about", requiresAuth: false },
  { name: "Permissions", url: "/admin/permissions", requiresAuth: true },
];

const Navbar = (): ReactElement => {
  const theme = useTheme();
  const colors = theme.palette.common;
  const textColor = theme.palette.text;
  const colorMode = useContext(ColorModeContext);
  const getHexOpacity = useHexOpacity();

  const currentLocation = useLocation();
  const isHomePage = currentLocation.pathname === "/";
  const { isAuthenticated } = useIsAuthenticated();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        height: "4rem",
        bgcolor: `${isHomePage ? colors.transparent : colors.primary[500] + getHexOpacity(10)}`,
        color: `${isHomePage ? textColor.white : textColor.black}`,
        borderBottom: isHomePage ? "none" : `solid 1px ${colors.accent[500] + getHexOpacity(20)}`,
      }}
    >
      <Container
        disableGutters={true}
        sx={{
          maxWidth: {
            sm: "none",
            md: "none",
          },
        }}
      >
        <Toolbar
          disableGutters={true}
          sx={{
            display: "flex",
            align: "center !important",
            justifyContent: "space-between",
            px: "15px",
          }}
        >
          {/* Logo - Text */}
          {!isHomePage && <LogoSmall width={32} />}

          {/* Hamburger in mobile view */}
          {isHomePage && (
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon
                  sx={{
                    color: `${isHomePage ? textColor.white : textColor.secondary}`,
                  }}
                />
              </IconButton>
              <Menu
                color={"primary"}
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(
                  (page) =>
                    (!page.requiresAuth || isAuthenticated) && (
                      <MenuItem
                        component={Link}
                        key={page.name}
                        to={page.url}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography variant="button" textAlign="center">
                          {page.name}
                        </Typography>
                      </MenuItem>
                    )
                )}
              </Menu>
            </Box>
          )}

          {/* Nav Items */}
          {isHomePage && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                "& > *": { mr: "1rem" },
              }}
            >
              {pages.map(
                (page) =>
                  (!page.requiresAuth || isAuthenticated) && (
                    <StyledNavLink
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      to={page.url}
                      style={({ isActive }) =>
                        isActive
                          ? {
                              color: textColor.accent,
                            }
                          : {
                              color: textColor.white,
                            }
                      }
                    >
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {page.name}
                      </Typography>
                    </StyledNavLink>
                  )
              )}
            </Box>
          )}

          <Box display="flex" ml="auto">
            {/* Theme Toggle */}
            {!isHomePage && (
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            )}

            {/* Sign In / Sign Out / Avatar */}
            <AuthenticatedTemplate>
              <TokenProvider>
                <UserProvider>
                  <Avatar isHomePage={isHomePage} />
                </UserProvider>
              </TokenProvider>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <SignInButton />
            </UnauthenticatedTemplate>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  backgroundColor: theme.palette.common.transparent,

  overflow: "hidden",
  display: "flex",
  padding: "5px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": {
    color: `${theme.palette.text.accent} !important`,
  },
}));

export default Navbar;
