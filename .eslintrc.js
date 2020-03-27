module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    '@typescript-eslint',
  ],
  settings: {
    "import/resolver": {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    }
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error', // 檢查 Hook 的規則
    'react-hooks/exhaustive-deps': 'warn', // 檢查 effect 的相依性
    "react/jsx-filename-extension": [1, {"extensions": [".ts", ".tsx"]}],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/extensions": ["error", "never" ],
    "typescript-eslint/no-explicit-any": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": ["CustomInputLabel"],
      "labelAttributes": ["label"],
      "controlComponents": ["CustomInput"],
      "depth": 3,
    }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "@typescript-eslint/interface-name-prefix": [1,{ "prefixWithI": "always" }]
  }
};
