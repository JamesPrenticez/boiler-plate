import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { SettingsProvider } from "./providers/settingsProvider";
import Fallback from "./components/common/Fallback";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/customTheme";
import Test from "./pages/Test";

const Home = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/Home"),
    new Promise((resolve) => setTimeout(resolve, 500)), // Adds a controlled delay to suspense
  ]);
  return moduleExports;
});

const About = lazy(async () => await import("./pages/About"));

const NotFound: React.FC = () => <h1>404 - Not Found</h1>;

const App = (): React.ReactElement => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SettingsProvider>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path={"/about"} element={<About />} />

              <Route path={"/test"} element={<Test />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </SettingsProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
