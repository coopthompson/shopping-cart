import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './components/homepage';

test('render h1 element', () => {
  render(<Homepage />);
  expect(screen.getByText('New to the Store')).toBeInTheDocument();
});
