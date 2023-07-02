import { useEffect, useState } from "react";

const useHexOpacity = (): ((percentage: number) => string) => {
  const getHexOpacity = (percentage: number): string => {
    const [hexOpacity, setHexOpacity] = useState<string>("00");

    useEffect(() => {
      const decimalOpacity = Math.round((percentage / 100) * 255);
      const hexOpacity = decimalOpacity.toString(16).padStart(2, "0").toUpperCase();
      setHexOpacity(hexOpacity);
    }, [percentage]);

    return hexOpacity;
  };
  return getHexOpacity;
};

export { useHexOpacity };
