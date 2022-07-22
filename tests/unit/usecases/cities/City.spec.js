import City from "@/usecases/cities/City";
import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";
import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";

describe("City", () => {
  const name = "Brasilia";
  const country = "BR";
  const temp = 30;
  const pressure = 50;
  const humidity = 40;
  const updatedAt = new Date;
  const city = new City({
    name, country, temp, pressure, humidity, updatedAt
  });

  it("should get city model", () => {
    expect(city.name).toBe(name);
    expect(city.country).toBe(country);
    expect(city.temp).toBe(temp);
    expect(city.pressure).toBe(pressure);
    expect(city.humidity).toBe(humidity);
    expect(city.updatedAt).toBe(updatedAt);
  });

  it("should get city as json object", () => {
    const cityAsJson = city.toJson();

    expect(cityAsJson.name).toBe(name);
    expect(cityAsJson.country).toBe(country);
    expect(cityAsJson.temp).toBe(temp);
    expect(cityAsJson.pressure).toBe(pressure);
    expect(cityAsJson.humidity).toBe(humidity);
    expect(cityAsJson.updatedAt).toBe(updatedAt);
  });

  it("should throw a RequiredFieldValidationError without required fields", () => {
    const emptyTest = () => { new City(); };
    const onlyNameTest = () => { new City({ name }); };
    const onlyCountryTest = () => { new City({ country }); };

    expect(emptyTest).toThrow(RequiredFieldValidationError);
    expect(onlyNameTest).toThrow(RequiredFieldValidationError);
    expect(onlyCountryTest).toThrow(RequiredFieldValidationError);
  });

  it("should throw a InvalidFormatValidationError with wrong country field", () => {
    const test = () => {
      new City({
        ...city.toJson(),
        country: "wrong-country",
      });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

  it("should throw a InvalidFormatValidationError with wrong temp field", () => {
    const test = () => {
      new City({
        ...city.toJson(),
        temp: "wrong-temp",
      });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

  it("should throw a InvalidFormatValidationError with wrong pressure field", () => {
    const test = () => {
      new City({
        ...city.toJson(),
        pressure: "wrong-pressure",
      });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

  it("should throw a InvalidFormatValidationError with wrong humidity field", () => {
    const test = () => {
      new City({
        ...city.toJson(),
        humidity: "wrong-humidity",
      });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

});
