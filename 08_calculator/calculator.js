const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayToSum) {
  return arrayToSum.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arrayToMultiple) {
  return arrayToMultiple.reduce((currentM, nextM) => currentM * nextM);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let factor = 1;
	if (a === 0) {
    return 1;
  } else {
    for (let i=a; i>0; i--) {
      factor *= i;
    }
    return factor;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
