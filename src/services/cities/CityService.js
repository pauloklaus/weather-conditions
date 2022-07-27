import City from "./City";

class CityService {
  _repository;

  constructor(repository = null) {
    this._repository = repository;
  }

  getWeather(cityAndCountryName) {
    return this._repository.getWeather(
      City.factoryWithCityAndCountry(cityAndCountryName)
    );
  }
}

export default CityService;
