function isValidCityAndCountry(context) {
  return /^[a-zA-Z ]+,[a-zA-Z]{2}$/.test(`${context}`);
}

export default isValidCityAndCountry;
