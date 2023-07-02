import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useHexOpacity } from "./useHexOpacity";

describe("useHexOpacity", () => {
  const getHexOpacity = useHexOpacity();

  it("returns a string of length 2", () => {
    const { result } = renderHook(() => getHexOpacity(50));
    expect(typeof result.current).toBe("string");
    expect(result.current.length).toBe(2);
  });

  it("returns the correct hex opacity for a given percentage", () => {
    const { result, rerender } = renderHook(({ percentage }) => getHexOpacity(percentage), {
      initialProps: { percentage: 25 },
    });

    expect(result.current).toBe("40");

    rerender({ percentage: 50 });
    expect(result.current).toBe("80");

    rerender({ percentage: 75 });
    expect(result.current).toBe("BF");
  });
});
