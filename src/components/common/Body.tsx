import React, { type ReactElement, type ReactNode } from "react";
import { Box, useTheme } from "@mui/material";

interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps): ReactElement => {
  const theme = useTheme();
  return (
    <Box
      component="main"
      height="100%"
      borderRadius="5px"
      bgcolor={theme.palette.primary.main}
      padding="15px"
      // py="15px"
      // px="20px"
      // boxShadow=" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      {children}
    </Box>
  );
};

export default Body;
