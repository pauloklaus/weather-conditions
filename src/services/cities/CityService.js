import City from "./City";

class CityService {
  _repository;

  constructor(repository = null) {
    this._repository = repository;
  }

  getWeather(cityAndCountryName) {
    const cityAndCountry = cityAndCountryName.split(",");

    return this._repository.getWeather(new City({
      name: cityAndCountry[0],
      country: cityAndCountry[1],
    }));
  }
}

export default CityService;
