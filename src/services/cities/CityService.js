class CityService {
  _repository;

  constructor(repository = null) {
    this._repository = repository;
  }

  getWeather(city) {
    return this._repository.getWeather(city);
  }
}

export default CityService;
