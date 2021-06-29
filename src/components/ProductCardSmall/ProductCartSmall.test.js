import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ProductCardSmall from './ProductCardSmall';
import { product } from '../../../mokfiles/testingMok';

describe('Product cart small', () => {
  test('Product cart small smoke test', () => {
    render(
      <BrowserRouter>
        <ProductCardSmall product={product} />)
      </BrowserRouter>
    );
  });
  test('Product cart small on click test', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <ProductCardSmall product={product} onClick={fn} />)
      </BrowserRouter>
    );
    const link = getByTestId('link');
    expect(fn).not.toBeCalled();
    userEvent.click(link);
    expect(fn).toBeCalled();
  });
});
