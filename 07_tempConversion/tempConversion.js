const convertToCelsius = function (degree) {
  let celsiusDegree = (degree - 32) * (5 / 9);
  return celsiusDegree;
};

const convertToFahrenheit = function (degree) {
  let fahrenheitDegree = (degree * 1.8) + 32;
  return fahrenheitDegree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
