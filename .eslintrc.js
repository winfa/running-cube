module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'commonjs': true
  },

  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
  },

  'extends': 'eslint:recommended',

  'globals': {
    '__DEV__': true,
    '__WECHAT__': true,
    '__ALIPAY__': true,
    'App': true,
    'Page': true,
    'Component': true,
    'Behavior': true,
    'wx': true,
    'getApp': true,
    'getCurrentPages': true,
  },
  'rules': {
    'indent': [
      'error', 2
    ],

    'linebreak-style': [
      'error',
      'unix'
    ],

    'quotes': [
      'error',
      'single'
    ],

    'semi': [
      'error',
      'always'
    ],
    'no-console': [
      'off', {
        'allow': ['log', 'warn', 'error', 'info']
      }
    ],

    'no-mixed-spaces-and-tabs': [
      'error', 'smart-tabs'
    ],

    'space-before-function-paren': [2, 'always'],

    'block-spacing': [1, 'never'],

    'no-cond-assign': 2,

    'no-dupe-args': 2,

    'no-dupe-keys': 2,

    'no-duplicate-case': 2,

    'no-empty': 2,

    'no-ex-assign': 2,

    'no-extra-boolean-cast': 2,

    'no-extra-parens': 0,


    'curly': [2, 'all'],

    'no-catch-shadow': 0,

    'no-label-var': 2,

    'no-restricted-globals': 2,

    'no-shadow': 0,

    'no-shadow-restricted-names': 2,

    'no-undef-init': 2,

    'no-undefined': 0,

    'no-use-before-define': 0,




    'array-bracket-spacing': [2, 'never'],


    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],

    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],


    'comma-style': [2, 'last'],


    'computed-property-spacing': [2, 'never'],


    'consistent-this': [2, 'self', 'that', '_self', '_that', 'me', '_this'],

    'func-names': 0,

    'eol-last': 0,

    'func-call-spacing': 2,

    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],

    'lines-around-comment': [2, {
      'beforeBlockComment': true
    }],
    'func-style': 0,

    'max-nested-callbacks': [2, 5],

    'id-blacklist': 0,

    'id-length': 0,

    'id-match': 0,

    'jsx-quotes': 0,

    'keyword-spacing': 2,

    'max-lines': 0,

    'max-params': [1, 5],

    'max-statements': [1, 200],

    'max-statements-per-line': 0,

    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],

    'new-parens': 2,

    'newline-after-var': 0,

    'no-array-constructor': 2,

    'no-bitwise': 0,

    'newline-before-return': 0,

    'newline-per-chained-call': 1,

    'no-continue': 0,

    'no-inline-comments': 0,

    'no-lonely-if': 0,

    'no-mixed-operators': 0,

    'no-multiple-empty-lines': [2, {
      'max': 2
    }],

    'no-negated-condition': 0,

    'no-nested-ternary': 0,

    'no-new-object': 2,

    'no-plusplus': 0,

    'no-restricted-syntax': 0,

    'no-spaced-func': 2,

    'no-ternary': 0,

    'no-trailing-spaces': 2,

    'no-underscore-dangle': 0,

    'no-unneeded-ternary': 2,

    'no-whitespace-before-property': 2,

    'one-var-declaration-per-line': 0,

    'operator-assignment': 0,

    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],

    'padded-blocks': 0,

    'quote-props': 0,

    'require-jsdoc': 0,

    'semi-spacing': 2,

    'sort-vars': 0,

    'space-before-blocks': [2, 'always'],

    'space-in-parens': [2, 'never'],

    'space-infix-ops': 2,

    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],

    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
    }],

    'unicode-bom': 2,

    'wrap-regex': 0,

    'no-case-declarations': ['warn'],





    'no-duplicate-imports': 2,

    'arrow-body-style': 2,

    'arrow-parens': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],

    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],

    'no-class-assign': 2,

    'no-confusing-arrow': 0,

    'no-const-assign': 2,

    'no-dupe-class-members': 2,

    'no-new-symbol': 2,

    'no-restricted-imports': 0,

    'no-this-before-super': 2,

    'no-useless-computed-key': 0,

    'no-var': 1,

    'object-shorthand': 0,

    'prefer-arrow-callback': 0,

    'prefer-const': 0,

    'prefer-reflect': 0,

    'prefer-spread': 0,

    'prefer-template': 0,

    'prefer-rest-params': 0,

    'require-yield': 2,

    'template-curly-spacing': 1,

    'yield-star-spacing': 2,

    'comma-dangle': 2,

    'no-constant-condition': 0,

    'max-len': [0, 200, { 'ignoreUrls': true }],

    'no-unused-vars': [0, {
      'vars': 'all',
      'args': 'none'
    }],
  }
};
