function isValidCityAndCountry(context) {
  return /^[a-zA-Z0-9 ]+[,]{1}[ ]*[a-zA-Z0-9]{2}$/.test(`${context}`);
}

export default isValidCityAndCountry;
