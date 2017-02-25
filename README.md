# Shared eslint config for Sinon

The [sharable eslint config][docs] for all Sinon.JS projects.

## Install

```bash
$ npm install eslint-config-sinon eslint --save-dev
```

## Usage

Add this to the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-sinon"
  },
  "devDependencies": {
    "eslint-config-sinon": "^1.0.0",
    "eslint": "^3.16.1"
  }
}
```

[docs]: http://eslint.org/docs/developer-guide/shareable-configs
