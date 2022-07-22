import isValidCityAndCountry from "@/helpers/IsValidCityAndCountry";

describe("isValidCityAndCountry", () => {

  it("should return true with valid cities format", () => {
    expect(isValidCityAndCountry("city,ok")).toBeTruthy();
    expect(isValidCityAndCountry("Chapeco,br")).toBeTruthy();
    expect(isValidCityAndCountry("Sao Paulo,BR")).toBeTruthy();
    expect(isValidCityAndCountry("New York,Us")).toBeTruthy();
  });

  it("should return false with an valid string", () => {
    expect(isValidCityAndCountry("test")).toBeFalsy();
    expect(isValidCityAndCountry("tokio,j")).toBeFalsy();
    expect(isValidCityAndCountry("Acapulco,")).toBeFalsy();
    expect(isValidCityAndCountry(",it")).toBeFalsy();
  });

});
