module.exports = {
  "extends": [
    "eslint:recommended",
  ],
  "rules": {
    "no-unused-vars": "warn",
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    "comma-dangle": ["warn", "always-multiline"],
    "@stylistic/js/indent": ['warn', 2],
    "@stylistic/js/keyword-spacing": 'warn',
    '@stylistic/js/no-multi-spaces': 'warn',
    'vue/script-setup-uses-vars': 'error',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
  },
}
