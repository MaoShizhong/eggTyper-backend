/* eslint-env node */
module.exports = {
    ignorePatterns: '**/*.js',
    env: { node: true, es2023: true, jest: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
};
