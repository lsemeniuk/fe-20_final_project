import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductCard from './ProductCard';
import store from '../../store/store';

const product = {
  _id: '60a33e74f7a92e0004be1e53',
  name: 'Смарт часы samsung galaxy watch 3 45 mm black',
  currentPrice: 12499,
  previousPrice: 13999,
  imageUrls: [
    {
      _id: '60a33e74f7a92e0004be1e54',
      smallImage: 'https://i.ibb.co/Qf4GvLD/1.jpg',
      largeImage: 'https://i.ibb.co/QFZ3J4j/1.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e55',
      smallImage: 'https://i.ibb.co/sq7Xf60/2.jpg',
      largeImage: 'https://i.ibb.co/MZB98FV/2.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e56',
      smallImage: 'https://i.ibb.co/Nx2HzkP/3.jpg',
      largeImage: 'https://i.ibb.co/bBDmvF0/3.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e57',
      smallImage: 'https://i.ibb.co/vw8RLW4/4.jpg',
      largeImage: 'https://i.ibb.co/9HdYGxB/4.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e58',
      smallImage: 'https://i.ibb.co/WVt2dJj/5.jpg',
      largeImage: 'https://i.ibb.co/k1Cp451/5.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e59',
      smallImage: 'https://i.ibb.co/4Vn26LH/6.jpg',
      largeImage: 'https://i.ibb.co/QFsrxCg/6.jpg',
    },
  ],
  superPrise: 'no',
  isNew: 'no',
  isHit: 'no',
  itemNo: '949618',
};

const productWithLabels = {
  _id: '60a33e74f7a92e0004be1e53',
  name: 'Смарт часы samsung galaxy watch 3 45 mm black',
  currentPrice: 12499,
  previousPrice: 13999,
  imageUrls: [
    {
      _id: '60a33e74f7a92e0004be1e54',
      smallImage: 'https://i.ibb.co/Qf4GvLD/1.jpg',
      largeImage: 'https://i.ibb.co/QFZ3J4j/1.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e55',
      smallImage: 'https://i.ibb.co/sq7Xf60/2.jpg',
      largeImage: 'https://i.ibb.co/MZB98FV/2.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e56',
      smallImage: 'https://i.ibb.co/Nx2HzkP/3.jpg',
      largeImage: 'https://i.ibb.co/bBDmvF0/3.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e57',
      smallImage: 'https://i.ibb.co/vw8RLW4/4.jpg',
      largeImage: 'https://i.ibb.co/9HdYGxB/4.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e58',
      smallImage: 'https://i.ibb.co/WVt2dJj/5.jpg',
      largeImage: 'https://i.ibb.co/k1Cp451/5.jpg',
    },
    {
      _id: '60a33e74f7a92e0004be1e59',
      smallImage: 'https://i.ibb.co/4Vn26LH/6.jpg',
      largeImage: 'https://i.ibb.co/QFsrxCg/6.jpg',
    },
  ],
  superPrise: 'yes',
  isNew: 'yes',
  isHit: 'yes',
  itemNo: '949618',
};

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
