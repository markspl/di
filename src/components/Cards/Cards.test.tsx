/* eslint-disable @typescript-eslint/no-unsafe-call */
import { afterEach, describe, expect } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import Cards from './Cards';

afterEach(() => {
    cleanup();
});

describe('App', () => {
    render(<Cards />);
    expect(screen.getByTestId('cards')).toBeTruthy;
});
