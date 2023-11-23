import pkg from 'jest-resolve';
const { createDefaultResolver } = pkg;

export default {
    preset: 'vite-jest',
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        jsdom: {
            url: 'https://example.com',
            features: {
                FetchAPI: true,
                URL: true,
            },
        },
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: ['js', 'cjs', 'jsx', 'ts', 'tsx'],
    testPathIgnorePatterns: ['/node_modules/'],
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
    },
    moduleDirectories: ['node_modules'],
    resolver: createDefaultResolver,
};
