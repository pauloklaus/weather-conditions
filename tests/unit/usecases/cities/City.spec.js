import City from "@/usecases/cities/City";
import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";
import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";

describe("City", () => {
  const name = "London,UK";
  const temp = 30;
  const pressure = 50;
  const humidity = 40;
  const cityWeather = new City({ name, temp, pressure, humidity });

  it("should get city model", () => {
    expect(cityWeather.name).toBe(name);
    expect(cityWeather.temp).toBe(temp);
    expect(cityWeather.pressure).toBe(pressure);
    expect(cityWeather.humidity).toBe(humidity);
  });

  it("should get city as json object", () => {
    const cityAsJson = cityWeather.toJson();

    expect(cityAsJson.name).toBe(name);
    expect(cityAsJson.temp).toBe(temp);
    expect(cityAsJson.pressure).toBe(pressure);
    expect(cityAsJson.humidity).toBe(humidity);
  });

  it("should throw a RequiredFieldValidationError with name field", () => {
    const test = () => {
      new City();
    };

    expect(test).toThrow(RequiredFieldValidationError);
  });

  it("should throw a InvalidFormatValidationError with name field", () => {
    const test = () => {
      new City({ name: "wrong-city" });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

  it("should throw a InvalidFormatValidationError with temp field", () => {
    const test = () => {
      new City({ name, temp: "wrong-temp" });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

  it("should throw a InvalidFormatValidationError with pressure field", () => {
    const test = () => {
      new City({ name, pressure: "wrong-pressure" });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

  it("should throw a InvalidFormatValidationError with humidity field", () => {
    const test = () => {
      new City({ name, humidity: "wrong-humidity" });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

});
