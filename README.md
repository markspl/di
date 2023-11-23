# 02/create-tests

## GitHub Copilot

-   2023-11-23
-   GPT-3

## Prompt

```
I need to create tests for the React project. The project uses Vite as build tool and contentful-cli to fetch data from Contentful. Yarn works as a package manager.

What I need to create tests?
```

## Response

-   Date: 2023-11-23

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
