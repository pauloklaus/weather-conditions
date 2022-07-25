import City from "@/services/cities/City";
import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";
import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";

describe("City", () => {
  const name = "Brasilia";
  const country = "BR";
  const temp = 30.15;
  const pressure = 50.25;
  const humidity = 40.35;
  const updatedAt = new Date;
  const city = new City({
    name, country, temp, pressure, humidity, updatedAt
  });

  it("should get city model", () => {
    expect(city.name).toBe(name);
    expect(city.country).toBe(country);
    expect(city.temp).toBe(Math.round(temp));
    expect(city.pressure).toBe(Math.round(pressure));
    expect(city.humidity).toBe(Math.round(humidity));
    expect(city.updatedAt).toStrictEqual(updatedAt);
  });

  it("should get city as json object", () => {
    const cityAsJson = city.toJson();

    expect(cityAsJson.name).toBe(name);
    expect(cityAsJson.country).toBe(country);
    expect(cityAsJson.temp).toBe(Math.round(temp));
    expect(cityAsJson.pressure).toBe(Math.round(pressure));
    expect(cityAsJson.humidity).toBe(Math.round(humidity));
    expect(cityAsJson.updatedAt).toStrictEqual(updatedAt);
  });

  it("should factory new city from string", () => {
    const cityFromFactory = City.factoryWithCityAndCountry("sao paulo,br");

    expect(cityFromFactory.name).toBe("Sao Paulo");
    expect(cityFromFactory.country).toBe("BR");
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

  it("should throw a InvalidFormatValidationError with wrong update date field", () => {
    const test = () => {
      new City({
        ...city.toJson(),
        updatedAt: "wrong-update-at",
      });
    };

    expect(test).toThrow(InvalidFormatValidationError);
  });

});
