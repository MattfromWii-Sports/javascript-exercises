const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arrayToSum) {
  let arraySum = 0;
	arrayToSum.forEach(item => {
    arraySum += item;
  });
  return arraySum;
};

const multiply = function(arrayToMultiple) {
  let arrayMultiple = 1;
  arrayToMultiple.forEach(item => {
    arrayMultiple *= item;
  });
  return arrayMultiple;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let factor = 1;
	if (a == 0) {
    return 1;
  } else {
    for (i=a; i>0; i--) {
      factor = i * factor
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
