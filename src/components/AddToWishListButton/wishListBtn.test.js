import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddToWishListBtn from './AddToWishListBtn';
import store from '../../store/store';

const id = '60a33e74f7a92e0004be1e53';
const itemNo = '949618';

describe('Add to wishList btn test', () => {
  test('add to wish list btn smoke test', () => {
    render(
      <Provider store={store}>
        <AddToWishListBtn id={id} itemNo={itemNo} />
      </Provider>
    );
  });
  test('add to wishList clicked', () => {});
});
