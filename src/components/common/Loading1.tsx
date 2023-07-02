import React, { type ReactElement } from "react";
import { Box, Typography, keyframes, styled, useTheme } from "@mui/material";

interface LoadingProps {
  fullScreen: boolean;
  transparent?: boolean;
}
const Loading1 = ({ fullScreen = true, transparent = false }: LoadingProps): ReactElement => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      bgcolor={transparent ? theme.palette.common.transparent : theme.palette.background.default}
      position={fullScreen ? "fixed" : "static"}
      top={fullScreen ? "0" : ""}
      left={fullScreen ? "0" : ""}
      right={fullScreen ? "0" : ""}
      height={fullScreen ? "100vh" : "100%"}
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
    >
      <Box position="relative" height="150px" width="150px" display="flex" alignItems="flex-end">
        <SpinFowardsCogSVG viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6,1.051a1.464,1.464,0,0,1,2.809,0l.1.338a1.463,1.463,0,0,0,1.815.993,1.448,1.448,0,0,0,.29-.122l.311-.169a1.465,1.465,0,0,1,1.988,1.987l-.171.311a1.464,1.464,0,0,0,.585,1.984,1.507,1.507,0,0,0,.288.119l.341.1a1.465,1.465,0,0,1,0,2.81l-.343.1a1.465,1.465,0,0,0-.869,2.105l.169.311a1.466,1.466,0,0,1-1.988,1.989l-.311-.171a1.462,1.462,0,0,0-2.1.873l-.1.341a1.465,1.465,0,0,1-2.809,0l-.1-.343a1.461,1.461,0,0,0-1.818-.988,1.507,1.507,0,0,0-.288.119l-.31.169a1.467,1.467,0,0,1-1.989-1.989l.171-.311a1.463,1.463,0,0,0-.585-1.984,1.58,1.58,0,0,0-.288-.117l-.338-.1a1.465,1.465,0,0,1,0-2.81l.338-.1a1.456,1.456,0,0,0,.873-2.106L2.093,4.08A1.466,1.466,0,0,1,4.08,2.091l.31.172a1.465,1.465,0,0,0,1.985-.586,1.4,1.4,0,0,0,.118-.288ZM11.428,8A3.429,3.429,0,1,0,8,11.43,3.43,3.43,0,0,0,11.428,8Z" />
        </SpinFowardsCogSVG>

        <SpinBackwardsCogSVG viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.6,1.051a1.464,1.464,0,0,1,2.809,0l.1.338a1.463,1.463,0,0,0,1.815.993,1.448,1.448,0,0,0,.29-.122l.311-.169a1.465,1.465,0,0,1,1.988,1.987l-.171.311a1.464,1.464,0,0,0,.585,1.984,1.507,1.507,0,0,0,.288.119l.341.1a1.465,1.465,0,0,1,0,2.81l-.343.1a1.465,1.465,0,0,0-.869,2.105l.169.311a1.466,1.466,0,0,1-1.988,1.989l-.311-.171a1.462,1.462,0,0,0-2.1.873l-.1.341a1.465,1.465,0,0,1-2.809,0l-.1-.343a1.461,1.461,0,0,0-1.818-.988,1.507,1.507,0,0,0-.288.119l-.31.169a1.467,1.467,0,0,1-1.989-1.989l.171-.311a1.463,1.463,0,0,0-.585-1.984,1.58,1.58,0,0,0-.288-.117l-.338-.1a1.465,1.465,0,0,1,0-2.81l.338-.1a1.456,1.456,0,0,0,.873-2.106L2.093,4.08A1.466,1.466,0,0,1,4.08,2.091l.31.172a1.465,1.465,0,0,0,1.985-.586,1.4,1.4,0,0,0,.118-.288ZM11.428,8A3.429,3.429,0,1,0,8,11.43,3.43,3.43,0,0,0,11.428,8Z" />
        </SpinBackwardsCogSVG>

        <Box display="flex" alignItems="baseline" justifyContent="center" flexGrow={1}>
          <Typography variant="h5" fontWeight={500} mr={0.5} color={theme.palette.text.primary}>
            Loading
          </Typography>
          <AnimatedEllipsis len={3} />
        </Box>
      </Box>
    </Box>
  );
};

const spinFowards = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const spinBackwards = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;

const SpinFowardsCogSVG = styled("svg")(({ theme }) => ({
  fill: theme.palette.common.minor,
  stroke: "",
  width: 60,
  height: 60,
  position: "absolute",
  top: "calc(50% - 30px)",
  left: "calc(65% - 30px)",
  transform: "rotate(0)",
  animation: `${spinFowards} infinite 3s linear`,
}));

const SpinBackwardsCogSVG = styled("svg")(({ theme }) => ({
  fill: theme.palette.common.minor,
  stroke: "",
  width: 40,
  height: 40,
  position: "absolute",
  top: "calc(35% - 25px)",
  left: "calc(30% - 12px)",
  transform: "rotate(0)",
  animation: `${spinBackwards} infinite 3s linear`,
}));

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

// const AnimatedDot = styled('svg')(({ theme, len }) => ({
const AnimatedDot = styled("svg")<{ index: number }>(({ theme, index }) => ({
  fill: theme.palette.text.primary,
  opacity: "0",
  stroke: "",
  width: 3,
  height: 3,
  animation: `${fadeIn} 1s ease-in-out forwards`,
}));

const AnimatedEllipsis = ({ len = 3 }: { len: number }): ReactElement => {
  return (
    <Box display="flex" sx={{ "& > *": { mr: 0.5 } }}>
      {Array.from({ length: len }, (_, index) => (
        <AnimatedDot
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          index={index + 1}
          style={{
            animationDelay: `${index}s`,
          }}
        >
          <circle cx="8" cy="8" r="8" />
        </AnimatedDot>
      ))}
    </Box>
  );
};

export default Loading1;
