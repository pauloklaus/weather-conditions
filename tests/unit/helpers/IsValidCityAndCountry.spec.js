import isValidCityAndCountry from "@/helpers/IsValidCityAndCountry";

describe("isValidCityAndCountry", () => {

  it("should return true if is a valid city and country", () => {
    expect(isValidCityAndCountry("brasilia,br")).toBeTruthy();
    expect(isValidCityAndCountry("BRASILIA ,BR")).toBeTruthy();
    expect(isValidCityAndCountry("BRaSIlia, bR")).toBeTruthy();
    expect(isValidCityAndCountry("SAO paulo,   bR")).toBeTruthy();
    expect(isValidCityAndCountry(" SAO paulo,bR")).toBeTruthy();
  });

  it("should return false if is a invalid city and country", () => {
    expect(isValidCityAndCountry("")).toBeFalsy();
    expect(isValidCityAndCountry("brasilia")).toBeFalsy();
    expect(isValidCityAndCountry("br")).toBeFalsy();
    expect(isValidCityAndCountry("brasilia-br")).toBeFalsy();
    expect(isValidCityAndCountry("brasilia - br")).toBeFalsy();
    expect(isValidCityAndCountry("brasilia / br")).toBeFalsy();
    expect(isValidCityAndCountry("brasilia,,br")).toBeFalsy();
  });

});
