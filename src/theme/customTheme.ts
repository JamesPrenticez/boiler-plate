import { useState, createContext, useMemo } from "react";
import { createTheme, type Theme } from "@mui/material/styles";
import { colorsDark, colorsLight } from "./colors";

type ModeType = "light" | "dark";

// MUI Theme Settings
export const themeSettings = (mode: ModeType): object => {
  const colors = mode === "dark" ? colorsDark : colorsLight;

  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            action: {
              main: colors.accent[500],
            },
            error: {
              main: colors.red[500],
            },
            warning: {
              main: colors.yellow[500],
            },
            info: {
              main: colors.blue[500],
            },
            success: {
              main: colors.green[500],
            },
            neutral: {
              main: colors.grey[500],
            },
            text: {
              primary: colors.primary[500],
              secondary: colors.secondary[500],
              accent: colors.accent[500],
              white: colors.white,
              black: colors.black,
              disabled: colors.disabled,
            },
            background: {
              default: colors.primary[500],
              paper: colors.primary[400],
            },
            common: {
              ...colors,
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            action: {
              main: colors.accent[500],
            },
            error: {
              main: colors.red[500],
            },
            warning: {
              main: colors.yellow[500],
            },
            info: {
              main: colors.blue[500],
            },
            success: {
              main: colors.green[500],
            },
            neutral: {
              main: colors.grey[500],
            },
            text: {
              primary: colors.primary[500],
              secondary: colors.secondary[500],
              accent: colors.accent[500],
              white: colors.white,
              black: colors.black,
              disabled: colors.disabled,
            },
            background: {
              default: colors.primary[500],
              paper: colors.primary[400],
            },
            common: {
              ...colors,
            },
          }),
    },
    typography: {
      fontFamily: ["Verdana", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Verdana", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Verdana", "sans-serif"].join(","),
        fontSize: 64,
      },
      h3: {
        fontFamily: ["Verdana", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Verdana", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Verdana", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Verdana", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          //   // Define the styles for the "xlarge" size
          //   root: {
          //     '& .MuiButton-sizeExtraLarge': {
          //       fontSize: '5rem',
          //       padding: '5rem 5rem',
          //     },
          //   },
        },
        // Define the size overrides for the "xlarge" size
        sizeOverrides: {
          extraLarge: {
            backgroundColor: "#ff0 !important",
            fontSize: "5rem",
            padding: "6rem 5rem",
          },
        },
      },
      //   MuiButton: {
      //     styleOverrides: {
      //       root: {
      //         fontSize: '10rem',
      //       },
      //     }
      //   },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): {
  theme: Theme;
  colorMode: { toggleColorMode: () => void };
} => {
  const [mode, setMode] = useState<ModeType>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, colorMode };
};
