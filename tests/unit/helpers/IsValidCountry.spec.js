import isValidCountry from "@/helpers/IsValidCountry";

describe("isValidCountry", () => {

  it("should return true if is valid country", () => {
    expect(isValidCountry("br")).toBeTruthy();
    expect(isValidCountry("BR")).toBeTruthy();
    expect(isValidCountry("Br")).toBeTruthy();
  });

  it("should return false if is invalid country", () => {
    expect(isValidCountry("")).toBeFalsy();
    expect(isValidCountry("bra")).toBeFalsy();
    expect(isValidCountry("B ")).toBeFalsy();
    expect(isValidCountry(" r")).toBeFalsy();
  });

});
