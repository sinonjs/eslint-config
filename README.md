# Shared eslint config for Sinon

The [sharable eslint config][docs] for all Sinon.JS projects.

The package includes all the dependencies to have a working `eslint`
setup that works with the configuration. Adopting projects will only
need to install `@sinonjs/eslint-config`.

## Install

```bash
$ npm install @sinonjs/eslint-config --save-dev
```

The published package now expects a current Node LTS runtime:
`^20.19.0 || ^22.13.0 || >=24`.

Repository development also expects Node 20 or newer because the local
pre-commit tooling is on `lint-staged` 16.x.

## Usage

Add an `eslint.config.js` file to the project root:

```js
"use strict";

module.exports = require("@sinonjs/eslint-config");
```

Create a `.browserslistrc` in the root of the project

```
baseline 2024
maintained node versions
```

Visit [browserslist.dev](https://browserslist.dev/?q=YmFzZWxpbmUgMjAyNCwgbWFpbnRhaW5lZCBub2RlIHZlcnNpb25z) to see what this translates to.

## Language level

The config parses ECMAScript 2025 and requires modern syntax and built-ins
(`const`/`let`, arrow callbacks, rest/spread, `Object.hasOwn`, `.at()`,
`Object.groupBy`, `Set` methods, and so on). The level trails the newest
ECMAScript edition by one year. Each year after TC39 ratifies a new edition,
`ecmaVersion`, the `globals` key and the `baseline` year in `.browserslistrc`
are raised together in a major release.

### Migrating a project

Most of the new rules have autofixers, which act as the codemod:

```bash
npm install @sinonjs/eslint-config@latest --save-dev
cp node_modules/@sinonjs/eslint-config/.browserslistrc .
npx eslint --fix .
npx eslint --fix . # a second pass settles arrow-body-style
npm run prettier:write
```

Then fix the rest by hand (`arguments` and `.apply` usage), and run the full
test suite. Review two kinds of autofix in particular:

- Callbacks turned into arrow functions cannot be called with `new`.
- `globalThis` and `Date.now()` may read a different global than before when
  globals are faked.

Commit the autofix output on its own, and add the merged commit to
`.git-blame-ignore-revs`.

[docs]: https://eslint.org/docs/latest/extend/shareable-configs
