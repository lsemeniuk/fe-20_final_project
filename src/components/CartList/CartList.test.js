import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CartList from './CartList';
import store from '../../store/store';

describe('Cart list test', () => {
  test('Cart list smoke test', () => {
    render(
      <Provider store={store}>
        <CartList />
      </Provider>
    );
  });
});
