import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartItem from './CartItem';
import { product } from '../../../mokfiles/testingMok';
import store from '../../store/store';

describe('Cart item test', () => {
  test('Cart item smoke test', () => {
    const cartQuantity = 1;
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartItem cartQuantity={cartQuantity} product={product} cart={[]} />
        </BrowserRouter>
      </Provider>
    );
  });
});
