module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    plugin1,
    'eslint-plugin-plugin2'
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