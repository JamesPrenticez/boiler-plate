import { isNullOrWhiteSpace } from "../../../utils";

export const getPredefinedColor = (initials: string): string => {
  if (isNullOrWhiteSpace(initials)) {
    return "#CCCCCC"; // return a default color
  }

  const colors = [
    "#32A852",
    "#1A8006",
    "#D46A7E",
    "#FECE44",
    "#E74C3C",
    "#9B59B6",
    "#F1C40F",
    "#1ABC9C",
    "#34495E",
  ];
  let index = 0;

  for (let i = 0; i < initials.length; i++) {
    index += initials.charCodeAt(i);
  }

  return colors[index % colors.length];
};

// https://mui.com/material-ui/react-avatar/#BackgroundLetterAvatars.tsx
