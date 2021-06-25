import React from 'react';
import { product } from '../../../mokfiles/testingMok';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddToCartButton from './AddToCartButton';
import store from '../../store/store';

const id = '60a33e74f7a92e0004be1e53';
const currentPrice = 5000;

describe('Add to cart btn test', () => {
  test('Add to cart button smoke test', () => {
    render(
      <Provider store={store}>
        <AddToCartButton product={product} id={id} currentPrice={currentPrice} />
      </Provider>
    );
  });
});
