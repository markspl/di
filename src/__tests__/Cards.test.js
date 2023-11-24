import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('renders button text', () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
});
