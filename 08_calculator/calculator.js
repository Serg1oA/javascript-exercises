const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(args) {
  return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function facto(a) {
	if (a === 0) {
    return 1;
  }
  return a * facto(a - 1);
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
