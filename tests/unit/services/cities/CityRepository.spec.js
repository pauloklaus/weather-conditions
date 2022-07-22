import City from "@/services/cities/City";
import CityRepository from "@/services/cities/CityRepository";

describe("CityRepository", () => {
  const city = "Brasilia";
  const country = "BR";
  const cityName = `${city},${country}`;
  const temp = 30;
  const pressure = 1000;
  const humidity = 70;

  const httpRequester = {
    get: () => ({
      main: {
        temp,
        pressure,
        humidity,
      },
      sys: {
        country,
      },
      name: city,
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
      temp: temp + 10,
      pressure: pressure + 10,
      humidity: humidity + 10,
      name: cityName,
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
    const cityWeather = await cityRepositoryWithExpiredCache.getWeather(cityName);

    expect(cityWeather.name).toBe(cityName);
    expect(cityWeather.temp).toBe(temp);
    expect(cityWeather.pressure).toBe(pressure);
    expect(cityWeather.humidity).toBe(humidity);
  });

  it("should get city weather from cache", async () => {
    const cityWeather = await cityRepositoryWithValidCache.getWeather(cityName);

    expect(cityWeather.name).toBe(cityName);
    expect(cityWeather.temp).toBe(temp + 10);
    expect(cityWeather.pressure).toBe(pressure + 10);
    expect(cityWeather.humidity).toBe(humidity + 10);
  });

});
