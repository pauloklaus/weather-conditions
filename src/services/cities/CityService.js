class CityService {
  constructor(repository = null) {
    this._repository = repository;
  }

  getWeather(cityAndCountry) {
    return this._repository.getWeather(cityAndCountry);
  }
}

export default CityService;
