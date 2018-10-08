// https://eslint.org/docs/rules/#possible-errors
const possibleErrors = {
    "for-direction": "off",
    "getter-return": "off",
    "no-async-promise-executor": "off",
    "no-await-in-loop": "off",
    "no-compare-neg-zero": "off",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": ["error", "functions"],
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "off",
    "no-obj-calls": "error",
    "no-prototype-builtins": "off",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "off",
    "no-unexpected-multiline": "off",
    "no-unreachable": "off",
    "no-unsafe-finally": "off",
    "no-unsafe-negation": "error",
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-jsdoc": "off",
    "valid-typeof": "error",
}

// https://eslint.org/docs/rules/#best-practices
const bestPractices = {
    "accessor-pairs": "error",
    "array-callback-return": "off",
    "block-scoped-var": "off",
    "class-methods-use-this": "off",
    "complexity": ["off", 11],
    "consistent-return": "off",
    "curly": ["error", "all"],
    "default-case": "warn",
    "dot-location": "off",
    "dot-notation": ["error", { "allowKeywords": true }],
    "eqeqeq": ["error", "allow-null"],
    "guard-for-in": "error",
    "max-classes-per-file": "off",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "off",
    "no-div-regex": "off",
    "no-else-return": "error",
    "no-empty-function": "off",
    "no-empty-pattern": "off",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "off",
    "no-fallthrough": "error",
    "no-floating-decimal": "off",
    "no-global-assign": "error",
    "no-implicit-coercion": "off",
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "off",
    "no-return-assign": "error",
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-assign": "off",
    "no-self-compare": "off",
    "no-sequences": "error",
    "no-throw-literal": "off",
    "no-unmodified-loop-condition": "off",
    "no-unused-expressions": "error",
    "no-unused-labels": "off",
    "no-useless-call": "off",
    "no-useless-concat": "off",
    "no-useless-escape": "off",
    "no-useless-return": "off",
    "no-void": "off",
    "no-warning-comments": ["off", { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
    "no-with": "error",
    "prefer-promise-reject-errors": "off",
    "radix": "off",
    "require-await": "off",
    "require-unicode-regexp": "off",
    "vars-on-top": "off",
    "wrap-iife": "off",
    "yoda": ["error", "never"]
}

// https://eslint.org/docs/rules/#strict-mode
const strictMode = {
    "strict": ["error", "global"]
}

// https://eslint.org/docs/rules/#variables
const variables = {
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "off",
    "no-restricted-globals": "off",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-unused-vars": ["error", {"vars": "all", "args": "after-used"}],
    "no-use-before-define": "error",
}

// https://eslint.org/docs/rules/#nodejs-and-commonjs
const nodeAndCommonJS = {
    "callback-return": "off",
    "global-require": "off",
    "handle-callback-err": "off",
    "no-buffer-constructor": "off",
    "no-mixed-requires": ["off", false],
    "no-new-require": "off",
    "no-path-concat": "off",
    "no-process-env": "off",
    "no-process-exit": "error",
    "no-restricted-modules": "off",
    "no-sync": "off",
}

module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "amd": true,
        "es6": false
    },
    "parserOptions": {
        "ecmaVersion": 5,
        "ecmaFeatures": {},
    },
    "rules": Object.assign({
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-catch-shadow": 2,
        "no-continue": 2,
        "no-ex-assign": 2,
        "no-extra-parens": [2, "functions"],
        "no-inline-comments": 0,
        "no-lonely-if": 0,
        "no-mixed-spaces-and-tabs": [2, false],
        "linebreak-style": [0, "unix"],
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-native-reassign": 2,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 0,
        "no-reserved-keys": 0,
        "no-space-before-semi": 0,
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-this-before-super": 0,
        "no-underscore-dangle": 2,
        "no-unneeded-ternary": 0,
        "no-var": 0,
        "prefer-const": 0,
        "array-bracket-spacing": [2, "never"],
        "brace-style": [0, "1tbs"],
        "camelcase": 2,
        "comma-dangle": [2, "never"],
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": [0, "never"],
        "consistent-this": [0, "that"],
        "constructor-super": 0,
        "eol-last": 2,
        "func-names": 0,
        "func-style": [0, "declaration"],
        "generator-star": 0,
        "generator-star-spacing": 0,
        "indent": [2, 4, {"SwitchCase": 1}],
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "lines-around-comment": 0,
        "max-depth": [0, 4],
        "max-len": [2, 120, 4],
        "max-nested-callbacks": [1, 2],
        "max-params": [0, 3],
        "max-statements": [0, 10],
        "new-cap": 2,
        "new-parens": 2,
        "newline-after-var": 0,
        "object-curly-spacing": [0, "never"],
        "object-shorthand": 0,
        "one-var": [2, {
             // Exactly one declaration for uninitialized variables per function (var) or block (let or const)
            "uninitialized": "always",
             // Exactly one declarator per initialized variable declaration per function (var) or block (let or const)
            "initialized": "never"
        }],
        "operator-assignment": [0, "always"],
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "quote-props": 0,
        "quotes": [2, "double"],
        "require-yield": 0,
        "semi": 2,
        "semi-spacing": [2, {"before": false, "after": true}],
        "sort-vars": 0,
        "keyword-spacing": ["error", { "after": true }],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
        "space-before-function-parentheses": [0, "always"],
        "space-in-brackets": [0, "never"],
        "space-in-parens": [0, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, { "words": true, "nonwords": false }],
        "spaced-comment": 0,
        "spaced-line-comment": [0, "always"],
        "wrap-regex": 0
    }, possibleErrors, bestPractices, strictMode, variables)
}
