import City from "./City";

class CityRepository {
  constructor(httpRequester, cacheHandler) {
    this._httpRequester = httpRequester;
    this._cacheHandler = cacheHandler;
  }

  async getWeather(city) {
    const cityName = `${city.name},${city.country}`;

    if (this._cacheHandler.isValid(cityName)) {
      return Promise.resolve(new City(this._cacheHandler.get(cityName)));
    }

    const params = {
      q: cityName,
      units: "metric",
    };

    const response = await this._httpRequester.get("/weather", params);
    const newCity = new City({
      name: `${response?.name}`,
      country: `${response?.sys?.country}`,
      temp: response?.main?.temp,
      pressure: response?.main?.pressure,
      humidity: response?.main?.humidity,
      updatedAt: new Date,
    });

    this._cacheHandler.set(cityName, newCity.toJson());
    return newCity;
  }
}

export default CityRepository;
