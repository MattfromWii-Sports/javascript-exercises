const convertToCelsius = function(fahr) {
  convertCelsius = ((fahr-32) * 5)/9;
  return Math.round(convertCelsius*10)/10;
};

const convertToFahrenheit = function(cels) {
  convertFahrenheit = ((cels*9)/5) + 32;
  return Math.round(convertFahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
