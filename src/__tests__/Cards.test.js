import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';
import { test } from "@jest/globals"

test('renders button text', () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText(/click me/i) as HTMLElement; // Add type assertion
  expect(buttonElement).toBeInTheDocument();
});