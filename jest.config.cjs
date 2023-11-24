module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
        transform_regex: [
            'ts-jest',
            {
                tsconfig: __dirname + '/tsconfig.json',
            },
        ],
    },
    extensionsToTreatAsEsm: ['.jsx'],
};
