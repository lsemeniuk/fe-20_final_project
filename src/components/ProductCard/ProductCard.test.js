import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductCard from './ProductCard';
import store from '../../store/store';
import { product, productWithLabels } from '../../../mokfiles/testingMok';

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
  test('Product item to have labels test', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard product={productWithLabels} inSlider={false} />
        </BrowserRouter>
      </Provider>
    );
    const superPrise = getByTestId('superPrice');
    const isNew = getByTestId('isNew');
    const isHit = getByTestId('isHit');
    const prevPrice = getByTestId('sales');
    expect(prevPrice).toBeInTheDocument();
    expect(superPrise).toBeInTheDocument();
    expect(isNew).toBeInTheDocument();
    expect(isHit).toBeInTheDocument();
  });
});
