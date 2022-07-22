import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";
import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";
import isEmpty from "@/helpers/IsEmpty";
import isValidCityAndCountry from "@/helpers/IsValidCityAndCountry";

class CityService {
  _repository;

  constructor(repository = null) {
    this._repository = repository;
  }

  validate(city) {
    if (isEmpty(city)) {
      throw new RequiredFieldValidationError("city");
    }

    if (!isValidCityAndCountry(city)) {
      throw new InvalidFormatValidationError("city");
    }
  }

  getWeather(city) {
    this.validate(city);
    return this._repository.getWeather(city);
  }
}

export default CityService;
