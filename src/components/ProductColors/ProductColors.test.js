import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductColors from './ProductColors';
import store from '../../store/store';

describe('Product colors test', () => {
  test('Product colors smoke test', () => {
    render(
      <Provider store={store}>
        <ProductColors color='red' />
      </Provider>
    );
  });
});
