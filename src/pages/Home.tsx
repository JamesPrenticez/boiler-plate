import React, { type ReactElement } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import LogoBig from "../components/layout/LogoBig";
import Navbar from "../components/layout/Navbar";

const Home = (): ReactElement => {
  const theme = useTheme();
  const colors = theme.palette.common;

  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
          backgroundImage: `linear-gradient(45deg,  ${colors.red[500]} 0%, ${colors.red[600]} 50%, ${colors.red[700]} 100%)`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "-5rem",
          }}
        >
          <LogoBig size={xs ? 0.4 : sm ? 0.5 : 0.75} />
        </Box>
      </Box>
    </>
  );
};

export default Home;
