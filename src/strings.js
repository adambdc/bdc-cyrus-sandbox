'use strict';

function assertString(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string');
  }
}

function assertNonNegativeInteger(value) {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    throw new TypeError('Expected a non-negative integer');
  }
}

function slugify(s) {
  assertString(s);
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function truncate(s, n) {
  assertString(s);
  assertNonNegativeInteger(n);
  if (s.length <= n) {
    return s;
  }
  return s.slice(0, n) + '…';
}

function titleCase(s) {
  assertString(s);
  return s.replace(/\S+/g, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
}

module.exports = { slugify, truncate, titleCase };
