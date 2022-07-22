import City from "@/usecases/cities/City";
import CityRepository from "@/usecases/cities/CityRepository";

describe("CityRepository", () => {
  const city = new City({
    name: "Brasilia",
    country: "BR",
    temp: 30,
    pressure: 1000,
    humidity: 70,
  });

  const httpRequester = {
    get: () => ({
      main: {
        temp: city.temp,
        pressure: city.pressure,
        humidity: city.humidity,
      },
      sys: {
        country: city.country,
      },
      name: city.name,
    })
  };

  const expiredCacheHandler = {
    isValid: () => false,
    get: () => {},
    set: () => {},
  };

  const validCacheHandler = {
    isValid: () => true,
    get: () => new City({
      ...city.toJson(),
      temp: city.temp + 10,
      pressure: city.pressure + 10,
      humidity: city.humidity + 10,
    }).toJson(),
    set: () => {},
  };

  let cityRepositoryWithExpiredCache = null;
  let cityRepositoryWithValidCache = null;

  beforeEach(() => {
    cityRepositoryWithExpiredCache = new CityRepository(httpRequester, expiredCacheHandler);
    cityRepositoryWithValidCache = new CityRepository(httpRequester, validCacheHandler);
  });

  it("should get city weather from request", async () => {
    const cityWeather = await cityRepositoryWithExpiredCache.getWeather(city);

    expect(cityWeather.name).toBe(city.name);
    expect(cityWeather.country).toBe(city.country);
    expect(cityWeather.temp).toBe(city.temp);
    expect(cityWeather.pressure).toBe(city.pressure);
    expect(cityWeather.humidity).toBe(city.humidity);
  });

  it("should get city weather from cache", async () => {
    const cityWeather = await cityRepositoryWithValidCache.getWeather(city);

    expect(cityWeather.name).toBe(city.name);
    expect(cityWeather.country).toBe(city.country);
    expect(cityWeather.temp).toBe(city.temp + 10);
    expect(cityWeather.pressure).toBe(city.pressure + 10);
    expect(cityWeather.humidity).toBe(city.humidity + 10);
  });

});
