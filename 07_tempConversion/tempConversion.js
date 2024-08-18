const convertToCelsius = function (degree) {
  let celsiusDegree = (degree - 32) * (5 / 9);
  let roundCelsius = Math.round(celsiusDegree * 10) / 10;
  return roundCelsius;
};

const convertToFahrenheit = function (degree) {
  let fahrenheitDegree = (degree * 1.8) + 32;
  let roundFahrenheit = Math.round(fahrenheitDegree * 10) / 10;
  return roundFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
