import React, { type ReactElement } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { tokens } from "../../theme/customTheme";

interface NotFoundProps {
  backgroundColor?: string;
  fontSize?: string;
  text?: string;
  fullScreen?: boolean;
}

const NoAccess = ({
  text = "Oh no! We couldn't find the page you are looking for!",
  fullScreen = false,
}: NotFoundProps): ReactElement => {
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
        sx={{ fontSize: "8rem", color: colors.ragRed, alignSelf: "center" }}
      />
      <Typography variant="h1" textAlign="center" fontWeight={500} color={theme.palette.text.black}>
        401 - Unauthorized
      </Typography>
      <Typography variant="h6" textAlign="center" fontWeight={500} color={theme.palette.text.black}>
        You do not have access to this feature. Please contact the admin.
      </Typography>
    </Box>
  );
};

export default NoAccess;
