import isNumber from "@/helpers/IsNumber";

describe("IsNumber", () => {

  it("should return true with valid numbers", () => {
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber(12.34)).toBeTruthy();
    expect(isNumber(-5)).toBeTruthy();
    expect(isNumber(-67,89)).toBeTruthy();
  });

  it("should return false with invalid numbers", () => {
    expect(isNumber("")).toBeFalsy();
    expect(isNumber("0")).toBeFalsy();
    expect(isNumber(" 1 ")).toBeFalsy();
    expect(isNumber("2.3")).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
    expect(isNumber({})).toBeFalsy();
  });

});
