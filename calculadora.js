const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

const mult = (a, b) => {
  return a * b;
};

const par = (a) => {
  if (a % 2 == 0) return 'O numero é par';
  else return 'O numero é impar';
};

module.exports = {
  sum,
  sub,
  div,
  mult,
  par,
};
