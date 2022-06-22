module.exports = {
  extends: [
    '@titicaca/eslint-config-triple/stylelint',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
}
