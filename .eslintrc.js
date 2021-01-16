module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/strongly-recommended",
    "@vue/standard"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: [2, "always"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "double"],
    "vue/max-attributes-per-line": ["error", {
      singleline: 5,
      multiline: 2
    }],
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      registeredComponentsOnly: false,
      ignores: []
    }],
    "vue/match-component-file-name": ["error", {
      extensions: ["jsx"],
      shouldMatchCase: false
    }],
    "vue/require-name-property": ["error"],
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "never"
    }]
  }
};
