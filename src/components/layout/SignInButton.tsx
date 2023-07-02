import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { VscSignIn } from "react-icons/vsc";

export const SignInButton = (): React.ReactElement => {
  const theme = useTheme();
  const colors = theme.palette.common;

  const handleLogin = async (loginType: string): Promise<void> => {
    console.log("sign in");
  };

  return (
    <Button
      variant="outlined"
      sx={{
        color: colors.white,
        // backgroundColor: colors.white,
        borderColor: { xs: colors.transparent, md: colors.white },
        fontSize: 16,
        fontWeight: 800,
        "&:hover": {
          color: colors.accent[500],
          borderColor: colors.transparent,
          backgroundColor: colors.white,
        },
      }}
      onClick={() => {
        void handleLogin("redirect");
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography variant="h5" textAlign="center" fontWeight={500}>
          Sign In
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <VscSignIn size={30} style={{ strokeWidth: "", fontSize: "1.1rem" }} />
      </Box>
    </Button>
  );
};
