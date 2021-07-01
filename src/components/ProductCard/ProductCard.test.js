import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductCard from './ProductCard';
import store from '../../store/store';
import { product } from '../../../mokfiles/testingMock';

describe('Product cart tests', () => {
  test('product cart smoke test', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard product={product} inSlider={false} />
        </BrowserRouter>
      </Provider>
    );
  });
});
