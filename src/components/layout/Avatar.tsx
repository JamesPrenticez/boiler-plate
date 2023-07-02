import React, { type ReactElement, type MouseEvent, useState } from "react";
import {
  Avatar as MUIAvatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";
import { SignOutMenuItem } from "./SignOutMenuItem";
import { getPredefinedColor, useHexOpacity } from "../../hooks";
import { settingsNavigation } from "../../constants/project/navigation";
import { useUserDetails } from "../../providers/userProvider";

interface AvatarProps {
  isHomePage: boolean;
}

const Avatar = ({ isHomePage }: AvatarProps): ReactElement => {
  const theme = useTheme();
  const textColor = theme.palette.text;
  const getHexOpacity = useHexOpacity();

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const userDetails = useUserDetails();

  if (userDetails !== undefined) {
    return (
      <Box>
        <Tooltip title="Open settings">
          <Box
            onClick={handleOpenUserMenu}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {/* Email Address */}
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: {
                  xs: "none",
                  md: "flex",
                },
                fontWeight: 550,
                color: `${isHomePage ? textColor.white : textColor.primary}`,
                textDecoration: "none",
                "&:hover": {
                  color: `${
                    isHomePage
                      ? textColor.white + getHexOpacity(66)
                      : textColor.primary + getHexOpacity(66)
                  } `,
                },
              }}
            >
              {userDetails.email}
            </Typography>

            {/* Avatar */}
            <IconButton sx={{ p: 0 }}>
              <MUIAvatar
                alt="profile picture"
                src=""
                sx={{
                  color: textColor.white,
                  bgcolor: getPredefinedColor(`${userDetails.initials}`),
                }}
              >
                {userDetails.initials}
              </MUIAvatar>
            </IconButton>
          </Box>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settingsNavigation.map((setting) => (
            <MenuItem
              component={Link}
              key={setting.name}
              to={setting.url}
              onClick={handleCloseUserMenu}
            >
              <Typography textAlign="center">{setting.name}</Typography>
            </MenuItem>
          ))}
          <SignOutMenuItem />
        </Menu>
      </Box>
    );
  }
  return <Box />;
};

export default Avatar;
