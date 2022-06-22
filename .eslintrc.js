const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
})

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier'],
  extends: [
    ...extendConfigs,
    '@titicaca/eslint-config-triple',
    '@titicaca/eslint-config-triple/frontend',
    // 확장할 규칙 이름...
  ],
  overrides: [
    ...overrides,
    // 특정 파일 대상 규칙...
  ],
  rules: {
    // 개별 규칙
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
