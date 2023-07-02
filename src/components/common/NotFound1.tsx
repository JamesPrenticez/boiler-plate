import React, { type ReactElement } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { tokens } from "../../theme/customTheme";

const NotFound1 = (): ReactElement => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        bgcolor: colors.offWhite,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <SentimentVeryDissatisfiedIcon
        sx={{ fontSize: "8rem", color: colors.minor, alignSelf: "center" }}
      />
      <Typography variant="h1" textAlign="center" fontWeight={500} color={theme.palette.text.black}>
        404 - Page Not Found
      </Typography>
    </Box>
  );
};

export default NotFound1;
