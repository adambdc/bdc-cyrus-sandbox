'use strict';

function assertFiniteNumber(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError('Expected a finite number');
  }
}

function celsiusToFahrenheit(c) {
  assertFiniteNumber(c);
  return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
  assertFiniteNumber(f);
  return (f - 32) * 5 / 9;
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius };
