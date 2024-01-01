module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  root: true,
  ignorePatterns: ['.eslintrc.*'],
  reportUnusedDisableDirectives: true,
}
