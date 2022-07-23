import InvalidFormatValidationError from "@/errors/InvalidFormatValidationError";
import RequiredFieldValidationError from "@/errors/RequiredFieldValidationError";
import isEmpty from "@/helpers/IsEmpty";
import isValidCountry from "@/helpers/IsValidCountry";
import isNumber from "@/helpers/IsNumber";
import capitalizeAllWords from "@/helpers/CapitalizeAllWords";

class City {
  constructor({
    name = "",
    country = "",
    temp = 0,
    pressure = 0,
    humidity = 0,
    updatedAt = new Date,
  } = {}) {
    if (isEmpty(name)) {
      throw new RequiredFieldValidationError("City name is required.");
    }

    if (isEmpty(country)) {
      throw new RequiredFieldValidationError("Country is required.");
    }

    if (!isValidCountry(country)) {
      throw new InvalidFormatValidationError("Not a valid country.");
    }

    if (!isNumber(temp)) {
      throw new InvalidFormatValidationError("It is not a valid temperature.");
    }

    if (!isNumber(pressure)) {
      throw new InvalidFormatValidationError("Pressure is not valid.");
    }

    if (!isNumber(humidity)) {
      throw new InvalidFormatValidationError("Humidity is not valid.");
    }

    this._name = name;
    this._country = country;
    this._temp = Math.round(temp);
    this._pressure = Math.round(pressure);
    this._humidity = Math.round(humidity);
    this._updatedAt = updatedAt;
  }

  get name() {
    return this._name;
  }

  get country() {
    return this._country;
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

  get updatedAt() {
    return this._updatedAt;
  }

  static factoryWithCityAndCountry(cityAndCountry) {
    const [ name = "", country = "" ] = `${cityAndCountry}`.split(",");

    return new City({
      name: capitalizeAllWords(name),
      country: `${country}`.toUpperCase(),
    });
  }

  toJson() {
    return {
      name: this.name,
      country: this.country,
      temp: this.temp,
      pressure: this.pressure,
      humidity: this.humidity,
      updatedAt: this.updatedAt,
    };
  }
}

export default City;
