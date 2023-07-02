import { describe, it, expect } from "vitest";
import { getPredefinedColor } from "./usePredefinedColor";

describe("getPredefinedColor", () => {
  it("should return a valid hex color code", () => {
    const initials = "AB";
    const color = getPredefinedColor(initials);
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // regex to check hex color code
    expect(regex.test(color)).toBe(true);
  });
});
