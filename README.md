# 02/create-tests

## Bard

-   2023-11-23

## Prompt

```
I need to create tests for the React project. The project uses Vite as build tool and contentful-cli to fetch data from Contentful. Yarn works as a package manager.

What I need to create tests?
```

## Response

-   Date: 2023-11-23

````
To create tests for your React project with Vite, contentful-cli, and Yarn, you'll need the following tools and dependencies:

**Testing tools:**

- **Jest:** A popular JavaScript testing framework that can be used to test React components and applications.

- **React Testing Library:** A library that provides testing utilities specifically for React components and applications.

**Contentful data fetching:**

- **contentful-cli:** A command-line tool that allows you to manage and interact with your Contentful space.

- **contentful-management:** A Node.js library that provides a programmatic interface for managing your Contentful space.

**Package management:**

- **Yarn:** A package manager that can be used to install and manage JavaScript dependencies.

**Steps to create tests:**

1. **Install Jest and React Testing Library:**

```bash
yarn add jest @testing-library/react
```

2. **Configure Jest:**

Create a `jest.config.js` file in the root of your project and add the following configuration:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
```

3. **Create test files:**

For each React component you want to test, create a corresponding test file with the same name as the component, but with the `.test.js` or `.test.tsx` extension.

4. **Write test cases:**

Inside each test file, import the React Testing Library and the component you're testing. Use Jest's `it` blocks to define test cases.

5. **Mock Contentful data:**

Since your project uses contentful-cli to fetch data from Contentful, you'll need to mock the data in your tests. Use Jest's `mock` function to create mock responses for your Contentful API calls.

6. **Run tests:**

To run your tests, use the following command:

```bash
yarn test
```

7. **Integrate with Vite:**

Vite doesn't automatically run Jest tests during development. To integrate Jest with Vite, you can use the `vite-jest` plugin. Install the plugin:

```bash
yarn add vite-jest
```

Then add the plugin to your Vite configuration file (usually `vite.config.js`):

```javascript
import { defineConfig } from 'vite';
import { viteJest } from 'vite-jest';

export default defineConfig({
  plugins: [viteJest()],
});
```

Now, Jest tests will be automatically run when you start Vite in development mode.
````

## Notes

-   uses `github.com/ahastudio/CodingLife` as reference
-   `jest.config.js` : Parsing error: ESLint was configured to run on `<tsconfigRootDir>/jest.config.js` using `parserOptions.project`
-   Cannot find module 'vite-jest' or its corresponding type declarations.ts(2307)
-   does not allow run `yarn dev` : ERROR: [plugin: externalize-deps] Failed to resolve entry for package "vite-jest". The package may have incorrect main/module/exports specified in its package.json: Missing "." specifier in "vite-jest"
    package

## Prompt 2

````
Generate test for Cards.tsx file:
```
import { useEffect, useState } from 'react';
import fetchCards from '../../functions/fetchCards';
import { TypeCardsFields } from '../../contentful';

import './Cards.scss';

function Cards() {
    const [data, setData] = useState<TypeCardsFields>();

    const fetchData = () => {
        fetchCards()
            .then((result) => {
                const data = result!;
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const cards = data?.cards;

    return (
        <div className="cards">
            {cards?.map((card) => {
                return (
                    <div
                        className="card"
                        key={card.fields.title}
                        style={{
                            background: `url(${card.fields.image?.fields.file.url}) no-repeat center`,
                        }}
                    >
                        {card.fields.title && card.fields.description && (
                            <div className="card-inner">
                                <div className="card-title">
                                    {card.fields.showTitle && (
                                        <h1>{card.fields.title}</h1>
                                    )}
                                </div>
                                <div className="card-text">
                                    <p>{card.fields.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
```
````

## Response

-   offers three different drafts

````
Sure, here is the test file for the `Cards.tsx` file:

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { TypeCardsFields } from '../../contentful';

jest.mock('../../functions/fetchCards');

describe('Cards component', () => {
  it('should render the cards', async () => {
    const mockCardsData: TypeCardsFields = {
      cards: [
        {
          fields: {
            title: 'Card 1',
            description: 'This is the first card.',
            image: {
              fields: {
                file: {
                  url: 'https://example.com/image1.jpg',
                },
              },
            },
          },
        },
        {
          fields: {
            title: 'Card 2',
            description: 'This is the second card.',
            image: {
              fields: {
                file: {
                  url: 'https://example.com/image2.jpg',
                },
              },
            },
          },
        },
      ],
    };

    fetchCards.mockResolvedValue(mockCardsData);

    render(<Cards />);

    const cards = screen.getAllByRole('card');
    expect(cards).toHaveLength(2);

    expect(cards[0]).toHaveStyle({
      backgroundImage: `url(https://example.com/image1.jpg) no-repeat center`,
    });

    expect(cards[1]).toHaveStyle({
      backgroundImage: `url(https://example.com/image2.jpg) no-repeat center`,
    });
  });
});
```

This test file will first mock the `fetchCards` function so that it always returns a specific set of card data. Then, it will render the `Cards` component and use the testing library to assert that the cards are rendered correctly.
````

## Notes 2

-   `yarn test` does not work (Command "test" not found)
-   eslint errors
-   Cannot find name 'describe'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.ts(2582)
-   Cannot find name 'expect'.ts(2304)

## Prompt 3

```
After testing, I found few problems which are listed belown:
- jest.config.js file: Parsing error: ESLint was configured to run on `<tsconfigRootDir>/jest.config.js` using `parserOptions.project`
- Cards.test.tsx file: 'React' is defined but never used.
- Cards.test.tsx file: Cannot find name 'jest'
- Cards.test.tsx file: Cannot find name 'describe'. Do you need to install type definitions for a test runner?
- Cards.test.tsx file: Cannot find name 'it'. Do you need to install type definitions for a test runner?
- Cards.test.tsx file: sync arrow function has no 'await' expression.
- Cards.test.tsx file: Type '{ url: string; }' is missing the following properties from type '{ url: string; details: { size: number; image?: { width: number; height: number; } | undefined; }; fileName: string; contentType: string; }': details, fileName, contentType
- Cards.test.tsx file: Unsafe member access .mockResolvedValue on an `any` value.
- Cards.test.tsx file: Unsafe member access .toHaveLength on an `any` value.
- Cards.test.tsx file: Unsafe member access .toHaveStyle on an `any` value.
- vite.config.ts file: This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.
- vite.config.ts file: Cannot find module 'vite-jest' or its corresponding type declarations.
- vite.config.ts file: Unsafe assignment of type any[] to a variable of type PluginOption[].
```

## Response 3

````
Sure, I can help you with these problems.

**jest.config.js file:**

The error message is telling you that ESLint is configured to run on the `jest.config.js` file using the `parserOptions.project` option. This means that ESLint is expecting to find a `tsconfig.json` file in the root directory of the project. If you have not yet created a `tsconfig.json` file, you can do so by running the following command:

```bash
npx tsc --init
```

This will create a basic `tsconfig.json` file that you can then customize as needed.

**Cards.test.tsx file:**

The errors in the `Cards.test.tsx` file are all related to the fact that you have not installed the type definitions for Jest. To install the type definitions for Jest, you can run the following command:

```bash
yarn add @types/jest
```

This will install the `@types/jest` package, which will provide the type definitions for Jest to the TypeScript compiler.

**vite.config.ts file:**

The errors in the `vite.config.ts` file are related to the fact that you have not installed the `vite-jest` plugin. To install the `vite-jest` plugin, you can run the following command:

```bash
yarn add vite-jest
```

This will install the `vite-jest` package, which will provide the plugin for integrating Jest with Vite.

Once you have installed all of the necessary dependencies, you should be able to run your tests without any errors.

Here is a summary of the steps to fix the problems you listed:

1. Create a `tsconfig.json` file in the root directory of the project.
2. Install the `@types/jest` package.
3. Install the `vite-jest` plugin.

I hope this helps!
````

## Notes 3

-   Did steps but `yarn dev` doesn't work: ERROR: [plugin: externalize-deps] Failed to resolve entry for package "vite-jest". The package may have incorrect main/module/exports specified in its package.json: Missing "." specifier in "vite-jest" package
-   yarn test not found

## Fix

-   couldn't fix
-   tried
    -   upgrade/downgrade packages
    -   configure jest.config.js
    -   change file types
    -   importing dependencies in jest.config.js
-   was closer to be resolved if compared to Copilot

````
Based on the provided information, it appears that the issue lies in resolving the `react_jsx-dev-runtime.js` module from the Vite dev runtime. This module is required for JSX compilation during development, and Jest is unable to locate it correctly.

Since you've tried various approaches, including upgrading Vite, disabling the Vite dev runtime, and using the `jest-resolve` plugin, without success, it's likely there's an underlying compatibility issue between Jest 27, Vite, and the Vite dev runtime.

Given the experimental nature of Jest 27 and the Vite dev runtime, it might be worth considering upgrading Jest to a more stable version, such as Jest 28 or Jest 29. These newer versions might have better compatibility with Vite and resolve the module resolution issue.

Alternatively, you could try using a forked version of `vite-jest` that is specifically designed to work with Jest 27. One such fork is `vite-jest-experimental`. Install it using:

```bash
yarn add vite-jest-experimental
```

Once installed, configure Jest to use the forked package:

```javascript
module.exports = {
  preset: 'vite-jest-experimental',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleFileExtensions: ['js', 'cjs'],
};
```

If neither of these options works, it might be necessary to raise an issue on the Jest GitHub repository or seek assistance from the Jest community forums. Provide detailed information about your project setup, Jest configuration, Vite version, and error messages to get further help.
````

```
I'm a text-based AI and can't assist with that.
```
