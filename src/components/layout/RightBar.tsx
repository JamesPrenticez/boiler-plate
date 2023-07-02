import React, { type ReactElement } from "react";
import { Box, useTheme } from "@mui/material";
import { useHexOpacity } from "../../hooks";

const RightBar = (): ReactElement => {
  const theme = useTheme();
  const colors = theme.palette.common;
  const getHexOpacity = useHexOpacity();

  return (
    <Box
      position="absolute"
      right="0px"
      top="0px"
      bottom="0px"
      mt="4rem"
      width={{
        // sm: "90px",
        md: "0px",
        xl: "280px",
      }}
      bgcolor={colors.primary[500] + getHexOpacity(10)}
      borderLeft={`solid 1px ${colors.accent[500] + getHexOpacity(20)}`}
      sx={{
        transition: "width 0.5s ease-in-out",
      }}
    />
  );
};

export default RightBar;
