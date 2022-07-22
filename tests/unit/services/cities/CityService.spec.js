import CityService from "@/services/cities/CityService";
import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";
import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";

describe("CityService", () => {
  let cityService = null;

  beforeEach(() => {
    const repository = {
      getWeather: (city) => ({
        city,
        temp: 30,
        pressure: 50,
        humidity: 40,
      })
    };

    cityService = new CityService(repository);
  });

  it("should get city weather", () => {
    const cityWeather = cityService.getWeather("Some City,BR");

    expect(cityWeather.temp).toBe(30);
  });

  it("should throw a RequiredFieldValidationError", () => {
    const test = () => {
      cityService.getWeather("");
    };

    expect(test).toThrow(RequiredFieldValidationError);
  });

  it("should throw a InvalidFormatValidationError", () => {
    const test = () => {
      cityService.getWeather("test");
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

});
