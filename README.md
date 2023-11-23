# 02/create-tests

## GitHub Copilot

-   2023-11-22
-   GPT-3

## Prompt

```
I need to create tests for the React project. The project uses Vite as build tool and contentful-cli to fetch data from Contentful. Yarn works as a package manager.

What I need to create tests?
```

## Response

-   Date: 2023-11-22

````
GitHub Copilot: To create tests for your React project, you will need a testing framework and assertion library. Here are the steps you need to follow:

1. Install Jest as your testing framework. Jest is widely used for testing React applications.
2. Install React Testing Library. This library is a very light-weight solution for testing React components. It provides light utility functions on top of `react-dom` and `react-dom/test-utils`, in a way that encourages better testing practices.
3. Install `@testing-library/jest-dom` to provide custom jest matchers for asserting on DOM nodes.
4. Install `@testing-library/user-event` to simulate user events on DOM elements.
5. Install `vite-plugin-testing-library` to integrate testing-library with Vite.
6. Update your `package.json` to include a script for running your tests.

Here is the code to install these packages:

```bash
yarn add --dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event vite-plugin-testing-library
```

And update your `package.json` scripts:

```json
"scripts": {
    "test": "jest"
}
```

You will also need to create a configuration file for Jest (`jest.config.js`) and setup your tests. You can create a `__tests__` directory in your project root and start writing your tests there.

For testing components that fetch data from Contentful, you might want to consider using a library like `msw` (Mock Service Worker) to intercept these requests and provide mock responses during testing. This allows you to test your components in isolation without needing to hit the actual Contentful API.
````

## Notes

-   uses package.json as reference file
-   vite-plugin-testing-library: not found
    > ❯ yarn add --dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event vite-plugin-testing-library
    > yarn add v1.22.19
    > [1/4] Resolving packages...
    > error An unexpected error occurred: "https://registry.yarnpkg.com/vite-plugin-testing-library: Not found".
    > info If you think this is a bug, please open a bug report with the information provided in "C:\\...\\di\\yarn-error.log".
    > info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.

## Prompt 2

-   Date: 2023-11-23

````
I tried to install packages, but I got this error message:

```
yarn add v1.22.19
[1/4] Resolving packages...
error An unexpected error occurred: "https://registry.yarnpkg.com/vite-plugin-testing-library: Not found".
info If you think this is a bug, please open a bug report with the information provided in "C:\\Users\\markus.palomaki\\Documents\\dippa\\di\\yarn-error.log".
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
```

Also, what I should add into `jest.config.js` file?
````

## Response 2

````
GitHub Copilot: I apologize for the confusion, there seems to be a mistake in my previous message. There's no package named `vite-plugin-testing-library`. You can remove it from the installation command.

Regarding the `jest.config.js` file, here's a basic setup:

```javascript
module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // setupFiles before the tests are ran
};
```

This configuration sets the root directory for Jest to look for tests in the `src` directory. It also specifies that Jest should look for test files with a `.spec` or `.test` suffix in the `__tests__` directory (or anywhere in the project).

The `transform` option is used to tell Jest that `ts` and `tsx` files should be transformed using `ts-jest`.

The `setupFilesAfterEnv` option is an array of paths to modules that run some code to configure or set up the testing framework before each test. In this case, it's setting up `jest-dom` for each test.

Please run the corrected installation command:

```bash
yarn add --dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```
````

## Notes 2

-   Packages was installed successfully
-   `jest.config.js` : File is a CommonJS module; it may be converted to an ES module.ts(80001)

## Prompt 3

```
Create Jest tests for the Cards.tsx file.
```

## Response 3

````
GitHub Copilot: To create Jest tests for the `Cards.tsx` file, you will need to mock the `fetchCards` function and simulate its response. Here's a step-by-step plan:

1. Import the necessary libraries and the component to be tested.
2. Mock the `fetchCards` function.
3. Write a test to check if the component renders without crashing.
4. Write a test to check if the `fetchCards` function is called on component mount.
5. Write a test to check if the cards are rendered correctly based on the mock data.

Here's the code for the tests:

```javascript
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Cards from '../path/to/Cards';
import fetchCards from '../../functions/fetchCards';

jest.mock('../../functions/fetchCards');

const mockData = {
  cards: [
    {
      fields: {
        title: 'Test Card 1',
        description: 'Test Description 1',
        image: {
          fields: {
            file: {
              url: 'test-url-1',
            },
          },
        },
      },
    },
    // Add more cards as needed
  ],
};

beforeEach(() => {
  (fetchCards as jest.Mock).mockResolvedValue(mockData);
});

test('renders without crashing', () => {
  render(<Cards />);
});

test('calls fetchCards on mount', async () => {
  render(<Cards />);
  await waitFor(() => expect(fetchCards).toHaveBeenCalledTimes(1));
});

test('renders cards correctly', async () => {
  render(<Cards />);
  await waitFor(() => screen.getByText('Test Card 1'));
  expect(screen.getByText('Test Card 1')).toBeInTheDocument();
  expect(screen.getByText('Test Description 1')).toBeInTheDocument();
});
```

Please replace `'../path/to/Cards'` with the actual path to the `Cards.tsx` file in your project.
````

## Notes 3

-   doesn't tell on which folder I need to add the test file and what name it should have
    -   based on the received code, the file should be created on the same folder where Cards.tsx is
-   test file doesn't find `rest` either `setupServer`
-   `yarn test` will throw `ReferenceError: module is not defined in ES module scope`
