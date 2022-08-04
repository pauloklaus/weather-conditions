import City from "./City";

class CityRepository {
  constructor(httpRequester, cacheHandler) {
    this._httpRequester = httpRequester;
    this._cacheHandler = cacheHandler;
  }

  _buildParams(cityAndCountry) {
    return {
      q: cityAndCountry,
      units: "metric",
    };
  }

  async getWeather(cityAndCountry) {
    if (this._cacheHandler.isValid(cityAndCountry)) {
      return Promise.resolve(new City(this._cacheHandler.get(cityAndCountry)));
    }

    const response = await this._httpRequester.get("/weather", this._buildParams(cityAndCountry));
    const newCity = new City({
      name: `${response?.name}`,
      country: `${response?.sys?.country}`,
      temp: response?.main?.temp,
      pressure: response?.main?.pressure,
      humidity: response?.main?.humidity,
      updatedAt: new Date,
    });

    this._cacheHandler.set(cityAndCountry, newCity.toJson());
    return newCity;
  }
}

export default CityRepository;
