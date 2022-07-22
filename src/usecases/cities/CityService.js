import City from "./City";

class CityService {
  _repository;

  constructor(repository = null) {
    this._repository = repository;
  }

  getWeather(cityName) {
    return this._repository.getWeather(new City({ name: cityName }));
  }
}

export default CityService;
