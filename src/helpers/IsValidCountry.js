function isValidCountry(context) {
  return /^[a-zA-Z]{2}$/.test(`${context}`);
}

export default isValidCountry;
