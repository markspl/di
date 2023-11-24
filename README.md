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
