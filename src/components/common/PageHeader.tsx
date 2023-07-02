import React, { type ReactElement } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useHexOpacity } from "../../hooks";

interface PageHeaderProps {
  title: string;
  subTitle: string;
}

const PageHeader = ({ title, subTitle }: PageHeaderProps): ReactElement => {
  const theme = useTheme();
  const getHexOpacity = useHexOpacity();

  return (
    <Box mb="5px">
      <Typography
        variant="h3"
        color={theme.palette.text.primary}
        fontWeight={500}
        marginBottom="2px"
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.text.accent + getHexOpacity(75)}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
