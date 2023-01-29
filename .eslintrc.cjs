module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier',
    ],
    overrides: [{
      "files": [
        "**/*.spec.js",
        "**/*.spec.jsx"
      ],
      "env": {
        "jest": true
      }
    }],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['react'],
    ignorePatterns: ['vite.config.ts', 'vite-env.d.ts'],
    rules: {
        semi: [2, 'always'],
        '@typescript-eslint/semi': [2, 'always'],
        '@typescript-eslint/member-delimiter-style': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        'no-console': 'off',
    },
};
