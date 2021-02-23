# Shared eslint config for Sinon

The [sharable eslint config][docs] for all Sinon.JS projects.

The package includes all the dependencies to have a working `eslint`
setup that works with the configuration. Adopting projects will only
need to install `@sinonjs/eslint-config`.

## Install

```bash
$ npm install eslint-config-sinon eslint --save-dev
```

## Usage

Add this to the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@sinonjs/eslint-config"
  }
}
```

Create a `.browserslistrc` in the root of the project

```
> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 11
not op_mini all
maintained node versions
```

Visit [browserslist.dev](https://browserslist.dev/?q=PiAwLjUlLCBsYXN0IDIgdmVyc2lvbnMsIEZpcmVmb3ggRVNSLCBub3QgZGVhZCwgbm90IElFIDExLCBub3Qgb3BfbWluaSBhbGw%3D) to see what this translates to.

[docs]: http://eslint.org/docs/developer-guide/shareable-configs
