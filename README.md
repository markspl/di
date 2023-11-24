# 02/create-tests

## ChatGPT

-   2023-11-23

## Prompt

```
I need to create tests for the React project. The project uses Vite as build tool and contentful-cli to fetch data from Contentful. Yarn works as a package manager.

What I need to create tests?
```

## Response

-   Date: 2023-11-23

````
Creating tests for a React project involves setting up a testing environment and writing test cases to ensure the functionality of your components and application. In your case, since your project uses Vite, Contentful, and Yarn, you'll need to configure the testing environment accordingly. Here's a step-by-step guide:

### 1. Choose a Testing Library/Framework:

#### React Testing Library:
- This is a popular choice for testing React applications. It encourages testing from a user's perspective.

### 2. Install Testing Dependencies:

```bash
# Jest and React Testing Library
yarn add --dev jest @testing-library/react @testing-library/jest-dom

# Optional: Jest configuration for React
yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-react

# Optional: Vite Jest Plugin
yarn add --dev vite-jest
```

### 3. Configure Jest:

Create a `jest.config.js` file in the root of your project:

```javascript
module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
```

### 4. Create Test Scripts in `package.json`:

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

### 5. Write Your Tests:

Create a `__tests__` folder in the same directory as your components. For example:

```
/src
  /components
    Button.js
  /__tests__
    Button.test.js
```

Example test file (`Button.test.js`):

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('renders button text', () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
```

### 6. Run Your Tests:

```bash
yarn test
```

### 7. Mocking External Dependencies:

For external dependencies like Contentful, you may need to mock API calls or other functions. Jest provides a powerful mocking system. For asynchronous code, you might want to use `jest.mock` or `jest.spyOn` to mock API calls.

### 8. Optional: Configure Vite for Jest:

If you encounter issues running Jest with Vite, you can install `vite-jest`:

```bash
yarn add --dev vite-jest
```

Then, update your `jest.config.js`:

```javascript
module.exports = {
  // ... existing config
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
```

This should help you set up a basic testing environment for your React project using Vite, Contentful, and Yarn. Adjust the configuration according to your specific project structure and needs.
````

## Notes

-   list of optional dependencies what can be installed
-   `yarn test` wont run because ReferenceError: module is not defined in ES module scope
-   test file has eslint errors

## Prompt 2

````
I got few issues:

The test file:
- Unsafe call of an `any` typed value.eslint@typescript-eslint/no-unsafe-call
- 'test' is not defined.eslintno-undef

jest.config.js file:
```
Parsing error: ESLint was configured to run on `<tsconfigRootDir>/jest.config.js` using `parserOptions.project`:
- <tsconfigRootDir>/tsconfig.json
- <tsconfigRootDir>/tsconfig.node.json
```

And when I try to run `yarn run` command, I get error:
```
ReferenceError: module is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and 'C:\(...)\di\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/(...)/di/jest.config.js:1:1
```
````

## Result 2

````
Let's address each of the issues step by step:

### 1. ESLint Issues in Test File:

#### Unsafe call of an `any` typed value:
This issue is related to TypeScript and ESLint complaining about unsafe use of `any`. To resolve this, you can add a type assertion to inform TypeScript that you are intentionally using `any`. For example:

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('renders button text', () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText(/click me/i) as HTMLElement; // Add type assertion
  expect(buttonElement).toBeInTheDocument();
});
```

#### 'test' is not defined:
Make sure you have properly imported `test` from `@testing-library/react`. Add the following import statement at the beginning of your test file:

```javascript
import { test } from '@jest/globals';
```

### 2. Jest Configuration Error:

The error you're encountering indicates a parsing error related to ESLint configuration. It seems like Jest is trying to use ESLint on the `jest.config.js` file, and there might be an issue with the ESLint and TypeScript configuration.

You can try adding the following to your `jest.config.js`:

```javascript
module.exports = {
  // ... existing config
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  // ... other configurations
};
```

Make sure to replace `<tsconfigRootDir>` with the actual path if it appears in your error message.

### 3. ES Module Error:

The error "ReferenceError: module is not defined in ES module scope" suggests that Jest is trying to run your configuration file as an ES module. To resolve this, you can either change the file extension of `jest.config.js` to `.cjs` or add `"type": "commonjs"` to your `package.json`.

#### Option 1: Change File Extension
Rename `jest.config.js` to `jest.config.cjs`.

#### Option 2: Update `package.json`
Add the following to your `package.json`:

```json
"type": "commonjs",
```

After addressing these issues, try running your tests again using `yarn test`. Adjust the solutions based on your project's specific setup and requirements.
````

## Notes 2

-   1. adding a type assertion gives feedback "This assertion is unnecessary since it does not change the type of the expression.eslint@typescript-eslint/no-unnecessary-type-assertion"
-   after changing jest.config.js to .cjs and running `yarn test`
    -   "Unknown option "parserOptions" with value {"tsconfigRootDir": "C:\\(...)\\di"} was found.  
        This is probably a typing mistake. Fixing it will remove this message."
    -   Validation error: Preset ts-jest/presets/js-with-babel not found
-   'React' is defined but never used.
-   expect is not defined
-   Unsafe member access .toBeInTheDocument on an `any` value.
