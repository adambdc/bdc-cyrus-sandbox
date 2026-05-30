'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/temperature');

test('celsiusToFahrenheit converts known values', () => {
  assert.strictEqual(celsiusToFahrenheit(0), 32);
  assert.strictEqual(celsiusToFahrenheit(100), 212);
  assert.strictEqual(celsiusToFahrenheit(-40), -40);
});

test('fahrenheitToCelsius converts known values', () => {
  assert.strictEqual(fahrenheitToCelsius(32), 0);
  assert.strictEqual(fahrenheitToCelsius(212), 100);
  assert.strictEqual(fahrenheitToCelsius(-40), -40);
});

test('round-trip fahrenheitToCelsius(celsiusToFahrenheit(x)) ~= x', () => {
  for (const x of [-273.15, -40, 0, 21, 37, 100, 500]) {
    assert.ok(Math.abs(fahrenheitToCelsius(celsiusToFahrenheit(x)) - x) < 1e-9);
  }
});

test('celsiusToFahrenheit throws TypeError on invalid input', () => {
  assert.throws(() => celsiusToFahrenheit('20'), TypeError);
  assert.throws(() => celsiusToFahrenheit(NaN), TypeError);
  assert.throws(() => celsiusToFahrenheit(Infinity), TypeError);
});

test('fahrenheitToCelsius throws TypeError on invalid input', () => {
  assert.throws(() => fahrenheitToCelsius('68'), TypeError);
  assert.throws(() => fahrenheitToCelsius(NaN), TypeError);
  assert.throws(() => fahrenheitToCelsius(Infinity), TypeError);
});
