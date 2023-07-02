import React, {
  // useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, useTheme, styled, SvgIcon } from "@mui/material";

import { useHexOpacity } from "../../hooks";
import { navigationItems } from "../../constants/project/sidebarNavigation";

const Sidebar = (): ReactElement => {
  const theme = useTheme();
  const colors = theme.palette.common;
  const getHexOpacity = useHexOpacity();

  // const [sidebarOpen, toggleSidebar] = useState(false);

  const StyledNavLink = styled(NavLink)({
    backgroundColor: colors.transparent,
    overflow: "hidden",
    display: "flex",
    padding: "4px 25px",
    cursor: "pointer",
    borderLeft: "solid 5px transparent",
    "&:hover": {
      backgroundColor: colors.primary[300],
    },
  });

  return (
    <Box position="absolute" top="0px" left="0px" display="flex" minHeight="100vh" mr="20px">
      <Box
        mt="4rem"
        width={{
          xs: "90px",
          sm: "90px",
          md: "280px",
        }}
        // width={`${sidebarOpen ? "90px" : "280px"}`}
        bgcolor={colors.primary[500] + getHexOpacity(10)}
        borderRight={`solid 1px ${colors.accent[500] + getHexOpacity(20)}`}
        sx={{
          transition: "width 0.5s ease-in-out",
        }}
      >
        <Box>
          {/* MENU TITLE & COLLAPSE TOGGLE */}
          <Box
            display="flex"
            alignItems="center"
            color={theme.palette.text.primary}
            m={{
              xs: "5px 0px",
              sm: "5px 0px",
              md: "5px 15px",
            }}
            pt="5px"
          >
            <Typography
              variant="h3"
              display={{
                xs: "none",
                sm: "none",
                md: "flex",
              }}
            >
              Menu
            </Typography>
            {/* <Box margin={`${sidebarOpen ? "0 auto" : "0 0 0 auto"}`}>
              <IconButton
                onClick={() => {
                  toggleSidebar(!sidebarOpen);
                }}
                sx={{ color: "inherit" }}
              >
                {sidebarOpen ? <MenuOutlinedIcon sx={{ fontSize: "24px" }} /> : <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: "24px" }} />}
              </IconButton>
            </Box> */}
          </Box>

          {/* NAVIGATION ITEMS */}
          {navigationItems?.map((group, index) => (
            <Box key={`${group.name} ${index}`} mb="15px">
              {group?.name === "Admin" ? (
                <SubMenu title={group.name} color={colors.cherry}>
                  {group.items?.map((item, index) => (
                    <StyledNavLink
                      key={`${item.name} ${index}`}
                      to={item.url}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? colors.primary[300] : "",
                        borderColor: isActive ? colors.accent[500] : "",
                      })}
                    >
                      <SvgIcon sx={{ color: item.supported ? colors.emerald : "inherit" }}>
                        {item.icon}
                      </SvgIcon>
                      <Typography
                        // variant='h6' // TODO causes a line height issue
                        fontWeight={400}
                        ml="10px"
                        display={{
                          xs: "none",
                          sm: "none",
                          md: "inline-block",
                        }}
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                      >
                        {item.name}
                      </Typography>
                    </StyledNavLink>
                  ))}
                </SubMenu>
              ) : (
                <SubMenu title={group.name} color={colors.primary[200]}>
                  {group.items?.map((item, index) => (
                    <StyledNavLink
                      key={`${item.name} ${index}`}
                      to={item.url}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? colors.primary[300] : "",
                        borderLeft: isActive ? `solid 5px ${colors.accent[500]}` : "",
                      })}
                    >
                      <SvgIcon sx={{ color: item.supported ? colors.accent[500] : "inherit" }}>
                        {item.icon}
                      </SvgIcon>
                      <Typography
                        // variant='h6' // causes a line height issue
                        fontWeight={400}
                        ml="10px"
                        display={{
                          xs: "none",
                          sm: "none",
                          md: "inline-block",
                        }}
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        sx={{
                          transition: "all 0.5s ease-in-out",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </StyledNavLink>
                  ))}
                </SubMenu>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

interface SubMenuProps {
  title: string;
  color?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const SubMenu = ({ title, color, icon, children }: SubMenuProps): ReactElement => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        // bgcolor={colors.primary[700]}
        variant="h5"
        mb="2px"
        ml="10px"
        color={color}
        fontWeight={300}
      >
        {title}
      </Typography>
      <Box display="flex" flexDirection="column">
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
