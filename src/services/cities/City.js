import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";
import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";
import isEmpty from "@/helpers/IsEmpty";
import isValidCityAndCountry from "@/helpers/IsValidCityAndCountry";
import isNumber from "@/helpers/IsNumber";

class City {
  constructor({
    name = "",
    temp = 0,
    pressure = 0,
    humidity = 0,
  } = {}) {
    if (isEmpty(name)) {
      throw new RequiredFieldValidationError("name");
    }

    if (!isValidCityAndCountry(name)) {
      throw new InvalidFormatValidationError("name");
    }

    if (!isNumber(temp)) {
      throw new InvalidFormatValidationError(temp);
    }

    if (!isNumber(pressure)) {
      throw new InvalidFormatValidationError(pressure);
    }

    if (!isNumber(humidity)) {
      throw new InvalidFormatValidationError(humidity);
    }

    this._name = name;
    this._temp = temp;
    this._pressure = pressure;
    this._humidity = humidity;
  }

  get name() {
    return this._name;
  }

  get temp() {
    return this._temp;
  }

  get pressure() {
    return this._pressure;
  }

  get humidity() {
    return this._humidity;
  }

  toJson() {
    return {
      name: this.name,
      temp: this.temp,
      pressure: this.pressure,
      humidity: this.humidity,
    };
  }
}

export default City;
