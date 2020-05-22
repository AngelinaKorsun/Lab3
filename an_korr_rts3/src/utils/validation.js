const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (typeof value === 'function' && value.length === 0) ||
  (Array.isArray(value) && value.length === 0) ||
  (value instanceof Error && value.message === '');

const isNatural = n => n !== '' && n >= 0 && Math.floor(n) === +n;
const isNumeric = value => /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/.test(value);

const isRange = (value, min = 0, max = 1) =>
  isNumeric(value) && Number(value) >= min && Number(value) <= max;

const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
const isEven = num => num % 2 === 0;

const NUMERIC_REQUIRED = 'Не є числом';
const NATURAL_REQUIRED = 'Число має бути N';
const REQUIRED_FIELD = "Це поле обов'язкове";
const PRIME_NUMBER = 'Число не повинно бути простим';
const EVEN_NUMBER = 'Число має бути не парним';
const RANGE_REQUIRED = 'Число має бути в межах 0..1';

export const factorizeValid = (num, errors = {}) => {
  isPrime(num) && (errors.factorization = PRIME_NUMBER);
  isEven(num) && (errors.factorization = EVEN_NUMBER);
  !isNatural(num) && (errors.factorization = NATURAL_REQUIRED);
  isEmpty(num) && (errors.factorization = REQUIRED_FIELD);
  return {isValid: isEmpty(errors), errors};
};

export const perceptronValid = (data, errors = {}) => {
  !isNumeric(data.x1) && (errors.x1 = NUMERIC_REQUIRED);
  !isNumeric(data.x2) && (errors.x2 = NUMERIC_REQUIRED);
  !isNumeric(data.y1) && (errors.y1 = NUMERIC_REQUIRED);
  !isNumeric(data.y2) && (errors.y2 = NUMERIC_REQUIRED);
  !isNatural(data.threshold) && (errors.threshold = NATURAL_REQUIRED);
  (isEmpty(data.sigma) || isEmpty(data.time) || isEmpty(data.iters)) &&
    (errors.pickers = 'Ці поля обовязкові');
  return {isValid: isEmpty(errors), errors};
};

export const geneticValid = (data, errors = {}) => {
  !isNumeric(data.a) && (errors.a = NUMERIC_REQUIRED);
  !isNumeric(data.b) && (errors.b = NUMERIC_REQUIRED);
  !isNumeric(data.c) && (errors.c = NUMERIC_REQUIRED);
  !isNumeric(data.d) && (errors.d = NUMERIC_REQUIRED);
  !isNumeric(data.y) && (errors.y = NUMERIC_REQUIRED);
  !isRange(data.mutation) && (errors.mutation = RANGE_REQUIRED);
  return {isValid: isEmpty(errors), errors};
};
