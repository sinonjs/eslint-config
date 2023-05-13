# Changes

## 4.1.0

- [`3aa7026`](https://github.com/sinonjs/eslint-config-sinon/commit/3aa70263691bc64389ac8c44f487453dd32bdbd3)
  Fix failing parsing of destructuring assignment (Carl-Erik Kopseng)
    >
    > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#specifications
    >

## 4.0.5

- [`2b0f92b`](https://github.com/sinonjs/eslint-config-sinon/commit/2b0f92b34d0c060b6aef132cfa54866823fb0b1b)
  Upgrade dependencies (Carl-Erik Kopseng)
- [`097f653`](https://github.com/sinonjs/eslint-config-sinon/commit/097f65324cf778170cd7710e7f679d2f1bbce650)
  Target all extensions matching .test. and -test. (Carl-Erik Kopseng)
    >
    > Fixes an issue where .mjs test files were not checked with
    > this config.
    >

_Released by [Carl-Erik Kopseng](https://github.com/fatso83) on 2022-01-28._

## 4.0.4

- [`06c342a`](https://github.com/sinonjs/eslint-config-sinon/commit/06c342a37585a60557b77c57bc0c813b430f6aa2)
  Bump glob-parent from 5.1.1 to 5.1.2 (dependabot[bot])
    >
    > Bumps [glob-parent](https://github.com/gulpjs/glob-parent) from 5.1.1 to 5.1.2.
    > - [Release notes](https://github.com/gulpjs/glob-parent/releases)
    > - [Changelog](https://github.com/gulpjs/glob-parent/blob/main/CHANGELOG.md)
    > - [Commits](https://github.com/gulpjs/glob-parent/compare/v5.1.1...v5.1.2)
    >
    > ---
    > updated-dependencies:
    > - dependency-name: glob-parent
    >   dependency-type: indirect
    > ...
    >
    > Signed-off-by: dependabot[bot] <support@github.com>

_Released by Morgan Roderick on 2021-07-08._

## 4.0.3

- [`60d64d9`](https://github.com/sinonjs/eslint-config-sinon/commit/60d64d99bd74ad276305188f24db3ea29bbb16d7)
  Bump browserslist from 4.16.3 to 4.16.6 (#10) (dependabot[bot])
    >
    > Bumps [browserslist](https://github.com/browserslist/browserslist) from 4.16.3 to 4.16.6.
    >
    > - [Release notes](https://github.com/browserslist/browserslist/releases)
    >
    > - [Changelog](https://github.com/browserslist/browserslist/blob/main/CHANGELOG.md)
    >
    > - [Commits](https://github.com/browserslist/browserslist/compare/4.16.3...4.16.6)
    >
    > 
    >
    > Signed-off-by: dependabot[bot] <support@github.com>
    >
    > 
    >
    > Co-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>

_Released by Morgan Roderick on 2021-05-29._

## 4.0.2

- [`9874e52`](https://github.com/sinonjs/eslint-config-sinon/commit/9874e5252806724ba6acaf927f2cde18bb5a76f8)
  disable arrow-parens (Carl-Erik Kopseng)

_Released by [Carl-Erik Kopseng](https://github.com/fatso83) on 2021-05-11._

## 4.0.1

- [`166b2bb`](https://github.com/sinonjs/eslint-config-sinon/commit/166b2bbf93b6977f869def8076a91e178886477e)
  Include .browserlistrc in included files (Carl-Erik Kopseng)
  > See sinonjs/sinon#2366
  >
  > Makes it possible to reuse it.

_Released by Morgan Roderick on 2021-05-04._

## 4.0.0

- [`6dc048a`](https://github.com/sinonjs/eslint-config-sinon/commit/6dc048ac261f7aa7a57129314278247196499bcd)
  Configure eslint and prettier (Morgan Roderick)
  > This repository should at least follow the same rules as the dependent projects
  >
  > Also run prettier on index.js to make it compliant
- [`23fec22`](https://github.com/sinonjs/eslint-config-sinon/commit/23fec224d0cab69e5f587cc4e3639a96ab712152)
  Increate max-nested-callbacks (Morgan Roderick)
  > This is a pragmatic measure to not have to refactor all the consuming libraries at this time. This can be improved in the future
- [`0ead948`](https://github.com/sinonjs/eslint-config-sinon/commit/0ead948690959fa72a1606508dad097edde2910f)
  Update README.md (Morgan Roderick)
- [`23237ae`](https://github.com/sinonjs/eslint-config-sinon/commit/23237aec450b2e2731ef9310caa943ebf065721d)
  Remove configuration of eslint-plugin-prettier (Morgan Roderick)
  > Downstream projects have switched to using `prettier --check` to verify
  > that code follows style guide.
  >
  > Example: https://github.com/sinonjs/sinon/pull/2324
- [`000a452`](https://github.com/sinonjs/eslint-config-sinon/commit/000a4522025c078e2b349644875adfde391e14a1)
  Add eslint-plugin-jsdoc as a dependency (Morgan Roderick)
- [`8fbffa1`](https://github.com/sinonjs/eslint-config-sinon/commit/8fbffa117414566c0b04ca070c59cc38ba41635e)
  Add eslint-plugin-compat as dependency (Morgan Roderick)
  > The current recommended configuration is:
  >
  > ```
  > > 0.5%
  > last 2 versions
  > Firefox ESR
  > not dead
  > not IE 11
  > not op_mini all
  > maintained node versions
  > ```
  >
  > This configuration will need to be manually set in a `.browserslistrc` file in
  > projects consuming this package (`@sinonjs/eslint-config`).
- [`7080861`](https://github.com/sinonjs/eslint-config-sinon/commit/7080861dcd4c031bce10bd8d96fdc3f0b1ec5a5b)
  Configure eslint-plugin-mocha (Morgan Roderick)
- [`5a2eb0b`](https://github.com/sinonjs/eslint-config-sinon/commit/5a2eb0bce49878bc1436b81565bf519f2d7cccfa)
  Add .prettierrc and .prettierignore (Morgan Roderick)
- [`621c2f1`](https://github.com/sinonjs/eslint-config-sinon/commit/621c2f1c02c1f516c047bfc2d5d5543de760fba1)
  Configure parser: use ES2017 (Morgan Roderick)
  > Also drop AMD support, we were not using it anyway.
  >
  > This effectively drops IE11 and legacy Edge, as they can't parse ES2017.
- [`a05b116`](https://github.com/sinonjs/eslint-config-sinon/commit/a05b116faea97bf267ec2a8b150bebd5c35eb194)
  Confiure symbol-description (Morgan Roderick)
  > See https://eslint.org/docs/rules/symbol-description
- [`6496a25`](https://github.com/sinonjs/eslint-config-sinon/commit/6496a258da3643d3131d6150f816532a9951f46b)
  Configure require-yield (Morgan Roderick)
  > See https://eslint.org/docs/rules/require-yield
- [`4107521`](https://github.com/sinonjs/eslint-config-sinon/commit/41075217cdf9030087c3daba5b0954730511b17e)
  Configure no-useless-rename (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-useless-rename
- [`10553f6`](https://github.com/sinonjs/eslint-config-sinon/commit/10553f6d7f6864e84394a8f322dc03204546d1f4)
  Configure no-useless-constructor (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-useless-constructor
- [`6b49ddc`](https://github.com/sinonjs/eslint-config-sinon/commit/6b49ddc90d4fced879890f2b2711db1483a1947d)
  Configure no-useless-computed-key (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-useless-computed-key
- [`5649825`](https://github.com/sinonjs/eslint-config-sinon/commit/56498259c17fe0bef1fa1e6f45d81fb42c7b3a0f)
  Configure no-this-before-super (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-this-before-super
- [`652de47`](https://github.com/sinonjs/eslint-config-sinon/commit/652de4766e439ffa9281f15ab5722dc161452e54)
  Configure no-restricted-exports (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-restricted-exports
- [`b13753c`](https://github.com/sinonjs/eslint-config-sinon/commit/b13753cc1ff5fb4f6829bb8cf7226a6049fcc5dd)
  Configure no-new-symbol (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-new-symbol
- [`ab04bf2`](https://github.com/sinonjs/eslint-config-sinon/commit/ab04bf20047ceceafd91b380a783041a69b32d66)
  Configure no-duplicate-imports (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-duplicate-imports
- [`da6118b`](https://github.com/sinonjs/eslint-config-sinon/commit/da6118bfd2676de4fb525b946fe2237da85f6e82)
  Configure no-dupe-class-members (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-dupe-class-members
- [`3846a73`](https://github.com/sinonjs/eslint-config-sinon/commit/3846a73dac780bbc555dcd71c4b98e69efb60924)
  Configure no-confusing-arrow (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-confusing-arrow
- [`c9c849f`](https://github.com/sinonjs/eslint-config-sinon/commit/c9c849fd014066d7e3ec9ee65c2a0cdb0aa54e05)
  Configure no-class-assign (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-class-assign
- [`b367df6`](https://github.com/sinonjs/eslint-config-sinon/commit/b367df6073ac5d1b93e2c0d37d83d69c18f73e36)
  Configure constructor-super (Morgan Roderick)
  > See https://eslint.org/docs/rules/constructor-super
- [`21792c4`](https://github.com/sinonjs/eslint-config-sinon/commit/21792c428f22ba88fd0e2f4688657f8bcd01929e)
  Configure arrow-parens (Morgan Roderick)
  > See https://eslint.org/docs/rules/arrow-parens
- [`0e8ea1a`](https://github.com/sinonjs/eslint-config-sinon/commit/0e8ea1a42c531420a376ae257b387d9d5c93b4f2)
  Configure arrow-body-style (Morgan Roderick)
  > See https://eslint.org/docs/rules/arrow-body-style
- [`885b429`](https://github.com/sinonjs/eslint-config-sinon/commit/885b4290d3a3eb96c886a4488b1a07afd2a50366)
  Let prettier handle semi colons (Morgan Roderick)
- [`4e841fa`](https://github.com/sinonjs/eslint-config-sinon/commit/4e841faea1ae978e84862a6d7425a2f73078c6b4)
  Let prettier handle line lengths (Morgan Roderick)
- [`ff4df53`](https://github.com/sinonjs/eslint-config-sinon/commit/ff4df53aabe5d6a49a8fd55f174b5fd0de20523d)
  Rename to use id-denylist (Morgan Roderick)
- [`42ed7cc`](https://github.com/sinonjs/eslint-config-sinon/commit/42ed7cc4f27fd10a4d8c41438e9f8ddf41cbc649)
  Remove unused nodeAndCommonJS section (Morgan Roderick)
  > The rules are not are not even used, are deprecated in `eslint@7` and
  > the [`eslint-plugin-node`][1] project they've been extracted to looks to
  > have gone stale.
  >
  > We clearly are doing fine without them
  >
  > [1]: https://github.com/mysticatea/eslint-plugin-node
- [`95372f0`](https://github.com/sinonjs/eslint-config-sinon/commit/95372f00c9147e698048419a403d5ff0578fd938)
  Configure require-await as error (Morgan Roderick)
  > See https://eslint.org/docs/rules/require-await
- [`2bdb2b5`](https://github.com/sinonjs/eslint-config-sinon/commit/2bdb2b533bc676cc9de8b3c63231b7b943048e76)
  Configure prefer-regex-literals as off (Morgan Roderick)
  > See https://eslint.org/docs/rules/prefer-regex-literals
- [`f93c307`](https://github.com/sinonjs/eslint-config-sinon/commit/f93c307d02820eb4e0340cfa898cbc1d93950274)
  Configure prefer-promise-reject-errors as error (Morgan Roderick)
- [`cc77ae7`](https://github.com/sinonjs/eslint-config-sinon/commit/cc77ae7c4f597c3c524e1c486f51a9759f72a82f)
  Configure no-useless-catch (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-useless-catch
- [`d3a6c2f`](https://github.com/sinonjs/eslint-config-sinon/commit/d3a6c2f8c3da97836cf0992772c8104b356024db)
  Make no-return-await an error (Morgan Roderick)
- [`41fdf58`](https://github.com/sinonjs/eslint-config-sinon/commit/41fdf584b881fc9a1f01f99db746490ec05a054b)
  Configure no-nonoctal-decimal-escape (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-nonoctal-decimal-escape
- [`38fba1c`](https://github.com/sinonjs/eslint-config-sinon/commit/38fba1cfbd2072f1e46785fdbb95fdcaf20ff26d)
  Configure no-constructor-return (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-constructor-return
- [`5cfc3a2`](https://github.com/sinonjs/eslint-config-sinon/commit/5cfc3a26a1e9c864cd8b4d0c50d2cb159cae1e6f)
  Configure grouped-accessor-pairs (Morgan Roderick)
  > See https://eslint.org/docs/rules/grouped-accessor-pairs
- [`b8c7606`](https://github.com/sinonjs/eslint-config-sinon/commit/b8c7606cc80099277e989f08791f74ec59d9517d)
  Configure default-param-last (Morgan Roderick)
  > See https://eslint.org/docs/rules/default-param-last
- [`029c9bb`](https://github.com/sinonjs/eslint-config-sinon/commit/029c9bb61c6a7525c45ef32e7d6a37feccab3341)
  Configure default-case-last (Morgan Roderick)
  > See https://eslint.org/docs/rules/default-case-last
- [`1b02f41`](https://github.com/sinonjs/eslint-config-sinon/commit/1b02f41a190a79de802b17ff38a7e41d3a7b974d)
  Configure no-useless-backreference (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-useless-backreference
- [`d5872f4`](https://github.com/sinonjs/eslint-config-sinon/commit/d5872f4f353e9a6d42616509e7f47ae92a2f4308)
  Configure no-unsafe-optional-chaining (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-unsafe-optional-chaining
- [`c869683`](https://github.com/sinonjs/eslint-config-sinon/commit/c869683ab1edf583c840ac864f09845d2b3d89ac)
  Configure no-unreachable-loop (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-unreachable-loop
- [`f4fde1c`](https://github.com/sinonjs/eslint-config-sinon/commit/f4fde1c72ad852fd003aaf56d1fcd42c037851e7)
  Configure no-setter-return (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-setter-return
- [`eb4d5b2`](https://github.com/sinonjs/eslint-config-sinon/commit/eb4d5b20cecf32dd1bcd707152836912d2973f72)
  Configure no-promise-executor-return (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-promise-executor-return
- [`34d9f29`](https://github.com/sinonjs/eslint-config-sinon/commit/34d9f299cf4889ba4b2e9df6e1d0dc96a6b39ebe)
  Configure no-loss-of-precision (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-loss-of-precision
- [`78584d0`](https://github.com/sinonjs/eslint-config-sinon/commit/78584d0edc5fcf9a6b5313702ea502dad1ef683a)
  Configure no-import-assign (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-import-assign
- [`5c41d80`](https://github.com/sinonjs/eslint-config-sinon/commit/5c41d8010c6284e914ab1c1b0467a54986488019)
  Configure no-dupe-else-if (Morgan Roderick)
  > See https://eslint.org/docs/rules/no-dupe-else-if
- [`149645d`](https://github.com/sinonjs/eslint-config-sinon/commit/149645d936153a54c1867941dbcbf039599f68a0)
  Quotes are handled by prettier now (Morgan Roderick)
- [`a669299`](https://github.com/sinonjs/eslint-config-sinon/commit/a66929970e24b2fc6eeb94f0a9ffe434c3f5ae94)
  Add eslint-plugin-mocha as dependency (Morgan Roderick)
- [`1b5381e`](https://github.com/sinonjs/eslint-config-sinon/commit/1b5381ef730e00aa700db1990761c05464e8bcc3)
  Add eslint dependency (Morgan Roderick)
  > By adding this as a dependency, downstream projects won't need to keep
  > track of adding the correct eslint version for every version of
  > `eslint-config-sinon`, which makes it a lot easier to keep up with
  > maintenance.
- [`dc72863`](https://github.com/sinonjs/eslint-config-sinon/commit/dc72863cdc2f43a7d253d9b0cae5a2332f4dd165)
  Add @studio/changes (Morgan Roderick)
- [`461e543`](https://github.com/sinonjs/eslint-config-sinon/commit/461e543fac26505037ff5ca581627117f8c20c1b)
  Rename package to @sinonjs/eslint-config (Morgan Roderick)
- [`a8bc416`](https://github.com/sinonjs/eslint-config-sinon/commit/a8bc4166f11102acd5583c92dc26da82ecc63fab)
  4.0.0 (Morgan Roderick)
- [`956db70`](https://github.com/sinonjs/eslint-config-sinon/commit/956db70f2e0566d0e7f8f1f093da4704cf16afb2)
  Add linting of jsdoc comments (Morgan Roderick)
- [`c601913`](https://github.com/sinonjs/eslint-config-sinon/commit/c6019134e6ffcbb6bf9f783b8c5c04e680f5c3b9)
  Add CONTRIBUTING.md and CODE_OF_CONDUCT.md (Morgan Roderick)
- [`4d92c92`](https://github.com/sinonjs/eslint-config-sinon/commit/4d92c92ce0b497f8393a4cc5a911540e9b612026)
  3.0.1 (Morgan Roderick)
- [`f8e6287`](https://github.com/sinonjs/eslint-config-sinon/commit/f8e62873c3fedf0d0433fc28a9221b0b3572b4d8)
  Disable no-use-before-define for functions (Morgan Roderick)
  > Functions are hoisted, so they're safe to use before they're defined
- [`210ba1b`](https://github.com/sinonjs/eslint-config-sinon/commit/210ba1b5bf92c92063c457cbee6bf29c388c8e90)
  3.0.0 (Morgan Roderick)
- [`e46ca1d`](https://github.com/sinonjs/eslint-config-sinon/commit/e46ca1d9b2ec007bdfff31acdaf473f5e5ab983b)
  Remove require-jsdoc (Morgan Roderick)
  > It has been deprecated, see https://eslint.org/docs/rules/require-jsdoc
- [`a3d06e7`](https://github.com/sinonjs/eslint-config-sinon/commit/a3d06e7783d26bf870cbe11c021c4d8ae01ccd49)
  Fix copy-paste error for array-element-newline (Morgan Roderick)
- [`7eb6698`](https://github.com/sinonjs/eslint-config-sinon/commit/7eb6698f9ed4ab86e45547138a03921f76004437)
  Add prefer-named-capture-group (Morgan Roderick)
  > And set it to "off", as Sinon targets ES5.1
- [`398f46c`](https://github.com/sinonjs/eslint-config-sinon/commit/398f46cc7719307764c18e118906cb1c6d8a4871)
  Remove no-valid-jsdoc (Morgan Roderick)
  > It has been deprecated, see https://eslint.org/docs/rules/valid-jsdoc
- [`defc11d`](https://github.com/sinonjs/eslint-config-sinon/commit/defc11d30b1724bbb7e26a426cb23698cf8d1db5)
  Require eslint@6.1.0 as peer dependency (Morgan Roderick)
- [`849e706`](https://github.com/sinonjs/eslint-config-sinon/commit/849e706380f2a9e1156b9dd6c4d05c863af87289)
  Disable all rules handled by prettier (Morgan Roderick)
- [`57b22c5`](https://github.com/sinonjs/eslint-config-sinon/commit/57b22c566796d37c75e9d0f1318cead11ce6014f)
  Set new major version (Morgan Roderick)
- [`3b77f63`](https://github.com/sinonjs/eslint-config-sinon/commit/3b77f634ee2edc625c050599c761748e4979ed32)
  Enable more rules in 'ecmascript6' (Morgan Roderick)
- [`d8bea0e`](https://github.com/sinonjs/eslint-config-sinon/commit/d8bea0e277d22b92cd490b273508395383f3a11c)
  Enable more rules in 'node and commonjs' (Morgan Roderick)
- [`ef0f234`](https://github.com/sinonjs/eslint-config-sinon/commit/ef0f2341f673a7383310258904730c1c34287143)
  Enable more rules in 'variables' (Morgan Roderick)
- [`6a316d4`](https://github.com/sinonjs/eslint-config-sinon/commit/6a316d4695530ccbf596a00c88553974584e319e)
  Enable more rules in 'best practices' (Morgan Roderick)
- [`7fe220c`](https://github.com/sinonjs/eslint-config-sinon/commit/7fe220c3a0d850a3fe928ef1fc3012981c28e94a)
  Enable more rules in 'possible errors' (Morgan Roderick)
- [`a3c3032`](https://github.com/sinonjs/eslint-config-sinon/commit/a3c3032a302a1ac81583d820e5cde93fb869a587)
  Format line for readability (Morgan Roderick)
- [`b086018`](https://github.com/sinonjs/eslint-config-sinon/commit/b08601888d428ee1d9637460b5d74838f4e8e61c)
  Extract ES6 settings to own object (Morgan Roderick)
- [`831b1ab`](https://github.com/sinonjs/eslint-config-sinon/commit/831b1abb4bb3a9b8da5e307cb4e4e5713b8b5d42)
  Extract stylistic issues to own object (Morgan Roderick)
- [`f639abf`](https://github.com/sinonjs/eslint-config-sinon/commit/f639abfaf7750e0e56a14cf6607740585d257522)
  Extract Node and CommonJS settings to own object (Morgan Roderick)
- [`13786a4`](https://github.com/sinonjs/eslint-config-sinon/commit/13786a4842ac12552a2f939f949eaa98c0fe4b46)
  Extract variables to their own object (Morgan Roderick)
- [`d2af386`](https://github.com/sinonjs/eslint-config-sinon/commit/d2af38630eccdb5c745d0ce5c5e22cc22a832741)
  Extract strict mode to own object (Morgan Roderick)
- [`ad2b906`](https://github.com/sinonjs/eslint-config-sinon/commit/ad2b9066eb773c436b7e57cacd84895118a67e4a)
  Extract best practices to their own object (Morgan Roderick)
- [`cfaf279`](https://github.com/sinonjs/eslint-config-sinon/commit/cfaf2790bd95bfb9700472221ce47672c56a755d)
  Extract possible errors to their own object (Morgan Roderick)
- [`0f7441a`](https://github.com/sinonjs/eslint-config-sinon/commit/0f7441ac0ef36f673539586e93192379f2f26ffd)
  1.0.3 (Carl-Erik Kopseng)
- [`3dad8b4`](https://github.com/sinonjs/eslint-config-sinon/commit/3dad8b4e2c7dd64ac9104361837ac58b6b2c7772)
  Use Eslint 4 (Carl-Erik Kopseng)
- [`7f6ca5c`](https://github.com/sinonjs/eslint-config-sinon/commit/7f6ca5c2f8937f1c45466ea4ee3e293b8eca08f1)
  1.0.2 (Maximilian Antoni)
- [`6bd7e8d`](https://github.com/sinonjs/eslint-config-sinon/commit/6bd7e8de50300ec4a720a6a704d6bd2c5e0b20b4)
  Set ecmaVersion to 5 (#1) (Morgan Roderick)
  > This is the version supported in sinonjs/sinon, and should be the
  >
  > default across all projects.
  >
  > Individual projects can set their own version, if they need to override
  >
  > this
- [`971e0c3`](https://github.com/sinonjs/eslint-config-sinon/commit/971e0c3c5e1c77bfe82a0c42795234e23b910600)
  1.0.1 (Maximilian Antoni)
- [`95cf683`](https://github.com/sinonjs/eslint-config-sinon/commit/95cf68392c84d59e212ecc99e35c38779d6bb403)
  Fix repository URL (Maximilian Antoni)
- [`4c12349`](https://github.com/sinonjs/eslint-config-sinon/commit/4c1234969b60280c63a0b9b7aac647c743dffbd9)
  Extract Sinon.JS eslint configs (Maximilian Antoni)
- [`1b1cb8e`](https://github.com/sinonjs/eslint-config-sinon/commit/1b1cb8e1dd3c68ce34117f9104be930c350369fd)
  Add LICENSE (Maximilian Antoni)
- [`b58b1c1`](https://github.com/sinonjs/eslint-config-sinon/commit/b58b1c1f1df29aa93fe0ded89e73dda7785bd796)
  Add README.md (Maximilian Antoni)

_Released by Morgan Roderick on 2021-03-12._
