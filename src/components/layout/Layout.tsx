import React, { type ReactElement, type ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import RightBar from "./RightBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <Box display="flex">
      <Navbar />
      <Sidebar />
      <Box marginTop="4rem" flex={1}>
        {children}
      </Box>
      <RightBar />
    </Box>
  );
};

export default Layout;
