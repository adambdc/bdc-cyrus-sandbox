# bdc-cyrus-sandbox

## String utilities

`src/strings.js` exports three string helpers:

```js
const { slugify, truncate, titleCase } = require('./src/strings');

// slugify: lowercase, trim, collapse runs of non-alphanumerics to single
// hyphens, and strip leading/trailing hyphens.
slugify('Hello, World!'); // => 'hello-world'

// truncate: returns s unchanged when s.length <= n, otherwise the first n
// characters followed by a single '…' ellipsis. n must be a non-negative integer.
truncate('hello world', 5); // => 'hello…'
truncate('hi', 5);          // => 'hi'

// titleCase: capitalize the first letter of each whitespace-separated word
// and lowercase the rest (whitespace is preserved).
titleCase('the QUICK bRoWn fox'); // => 'The Quick Brown Fox'
```

All three throw a `TypeError` when `s` is not a string (and `truncate` also
throws when `n` is not a non-negative integer).
