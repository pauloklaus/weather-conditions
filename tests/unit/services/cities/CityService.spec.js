import City from "@/services/cities/City";
import CityService from "@/services/cities/CityService";

describe("CityService", () => {
  const name = "Brasilia";
  const country = "BR";
  const repository = {
    getWeather: (cityAndCountry) => Promise.resolve(
      new City({
        name,
        country,
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
    const cityWeather = await cityService.getWeather(`${name},${country}`);

    expect(cityWeather.name).toBe(name);
    expect(cityWeather.country).toBe(country);
    expect(cityWeather.temp).toBe(30);
    expect(cityWeather.pressure).toBe(50);
    expect(cityWeather.humidity).toBe(40);
  });

});
