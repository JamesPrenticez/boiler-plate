import React, { type ReactElement } from "react";
import { MenuItem } from "@mui/material";

export const SignOutMenuItem = (): ReactElement => {
  const handleLogout = async (logoutType: string): Promise<void> => {
    console.log("Sign Out");
  };

  return (
    <MenuItem
      onClick={() => {
        void handleLogout("redirect");
      }}
    >
      Sign out
    </MenuItem>
  );
};
