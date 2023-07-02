import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    size: "extraLarge";
  }
  interface ButtonPropsSizeOverrides {
    extraLarge: true;
  }
  interface ButtonPropsVariantOverrides {
    color: "notused";
  }
}
