import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Cart from './Cart';
import store from '../../store/store';

const fn = jest.fn();

describe('Cart test', () => {
  test('Cart smoke test', () => {
    render(
      <Provider store={store}>
        <Cart buttonHandler={fn} display />
      </Provider>
    );
  });
});
