import React, { useEffect, useState, type ReactElement } from "react";
import { Box, Typography, keyframes, styled } from "@mui/material";

type SavingStatus = "loading" | "success" | "error" | null;

interface SavingProps {
  status: SavingStatus;
}

const Saving = ({ status }: SavingProps): ReactElement => {
  const [showStatus, setShowStatus] = useState<boolean>(false);

  useEffect(() => {
    if (status === "success") {
      setShowStatus(true);
      const timeout = setTimeout(() => {
        setShowStatus(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [status]);

  return (
    <Box display="flex" justifyContent="flex-end">
      {/* Loading */}
      {status === "loading" && (
        <Box display="flex" alignItems="center">
          <Typography mr="5px">Saving...</Typography>
          <SpinFowardsLineSVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8.00023L18.3642 5.63609M5.63631 18.364L8.00026 16M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569M8.00023 8.00023L5.63609 5.63609M18.364 18.364L16 16" />
          </SpinFowardsLineSVG>
        </Box>
      )}

      {/* Success */}
      {showStatus && status === "success" && (
        <Box display="flex" alignItems="center">
          <Typography mr="5px">Successfully saved!</Typography>
          <TickSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </TickSVG>
        </Box>
      )}

      {/* Error */}
      {status === "error" && <p>Oops... there was an error</p>}
    </Box>
  );
};

const spinFowards = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinFowardsLineSVG = styled("svg")(({ theme }) => ({
  width: 18,
  height: 18,
  stroke: theme.palette.common.disabled,
  strokeWidth: 1.5,
  strokeLinecap: "round",
  animation: `${spinFowards} infinite 2s linear`,
}));

const stroke = keyframes`
  100% { stroke-dashoffset: 0; }
`;

const scale = keyframes`
  0%, 100% { transform: none; }
  50% { transform: scale3d(1.5, 1.5, 1.5); }
`;

const TickSVG = styled("svg")(({ theme }) => ({
  width: 24,
  height: 24,
  strokeWidth: 5,
  stroke: "rgb(34 197 94)",
  fill: "none",
  transformOrigin: "50% 50%",
  strokeDasharray: 48,
  strokeDashoffset: 48,
  animation: `
    ${stroke} cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards, 
    ${scale} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 1.1s forwards`,
}));

export { Saving, type SavingStatus };
