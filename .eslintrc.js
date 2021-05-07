module.exports = {
  extends: [
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:mdx/recommended',
  ],
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
      rules: {
        'react/jsx-no-undef': 'off',
      },
    },
  ],
  plugins: ['simple-import-sort', 'eslint-plugin-react'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
      },
    ],
  },
};
