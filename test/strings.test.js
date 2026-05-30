'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { slugify, truncate, titleCase } = require('../src/strings');

test('slugify converts the documented example', () => {
  assert.strictEqual(slugify('Hello, World!'), 'hello-world');
});

test('slugify lowercases, collapses runs of non-alphanumerics, and strips edges', () => {
  assert.strictEqual(slugify('  Foo   Bar  '), 'foo-bar');
  assert.strictEqual(slugify('a__b--c!!d'), 'a-b-c-d');
  assert.strictEqual(slugify('---Already-Slug---'), 'already-slug');
  assert.strictEqual(slugify('Café 123'), 'caf-123');
});

test('slugify handles the empty string and all-separator input', () => {
  assert.strictEqual(slugify(''), '');
  assert.strictEqual(slugify('   '), '');
  assert.strictEqual(slugify('!@#$%'), '');
});

test('slugify throws TypeError on non-string input', () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
});

test('truncate returns the string unchanged when short enough', () => {
  assert.strictEqual(truncate('hello', 5), 'hello');
  assert.strictEqual(truncate('hi', 5), 'hi');
  assert.strictEqual(truncate('', 0), '');
});

test('truncate cuts to n chars and appends a single ellipsis', () => {
  assert.strictEqual(truncate('hello world', 5), 'hello…');
  assert.strictEqual(truncate('abcdef', 3), 'abc…');
  assert.strictEqual(truncate('abc', 0), '…');
});

test('truncate throws TypeError when s is not a string', () => {
  assert.throws(() => truncate(123, 2), TypeError);
  assert.throws(() => truncate(null, 2), TypeError);
});

test('truncate throws TypeError when n is not a non-negative integer', () => {
  assert.throws(() => truncate('hello', -1), TypeError);
  assert.throws(() => truncate('hello', 1.5), TypeError);
  assert.throws(() => truncate('hello', '3'), TypeError);
  assert.throws(() => truncate('hello', NaN), TypeError);
});

test('titleCase capitalizes each word and lowercases the rest', () => {
  assert.strictEqual(titleCase('hello world'), 'Hello World');
  assert.strictEqual(titleCase('HELLO WORLD'), 'Hello World');
  assert.strictEqual(titleCase('the QUICK bRoWn fox'), 'The Quick Brown Fox');
});

test('titleCase preserves multiple spaces between words', () => {
  assert.strictEqual(titleCase('foo   bar'), 'Foo   Bar');
  assert.strictEqual(titleCase('  leading and trailing  '), '  Leading And Trailing  ');
});

test('titleCase handles the empty string', () => {
  assert.strictEqual(titleCase(''), '');
});

test('titleCase throws TypeError on non-string input', () => {
  assert.throws(() => titleCase(99), TypeError);
  assert.throws(() => titleCase(null), TypeError);
  assert.throws(() => titleCase(undefined), TypeError);
});
