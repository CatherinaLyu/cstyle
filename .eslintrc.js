module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: [
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: module,
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: esprima,
  rules: {
    semi: 2
  }
};