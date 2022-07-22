import City from "@/usecases/cities/City";
import CityService from "@/usecases/cities/CityService";

describe("CityService", () => {
  const repository = {
    getWeather: (city) => Promise.resolve(
      new City({
        ...city.toJson(),
        temp: 30,
        pressure: 50,
        humidity: 40,
      })
    )
  };

  let cityService = null;

  beforeEach(() => {
    cityService = new CityService(repository);
  });

  it("should get city weather", async () => {
    const name = "Some City,BR";
    const cityWeather = await cityService.getWeather(name);

    expect(cityWeather.name).toBe(name);
    expect(cityWeather.temp).toBe(30);
    expect(cityWeather.pressure).toBe(50);
    expect(cityWeather.humidity).toBe(40);
  });

});
