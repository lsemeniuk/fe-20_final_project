import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PriceBlock from './PriceBlock';

const currentPrice = 500;
const previousPrice = 1000;

describe('Price block test', () => {
  test('Price block smoke test', () => {
    render(<PriceBlock currentPrice={currentPrice} />);
  });
  test('Current price test', () => {
    const { getByTestId } = render(<PriceBlock currentPrice={currentPrice} previousPrice={previousPrice} />);
    const prevPrice = getByTestId('prevPrice');
    const newPrice = getByTestId('newPrice');
    expect(prevPrice).toBeInTheDocument();
    expect(newPrice).toBeInTheDocument();
  });
});
