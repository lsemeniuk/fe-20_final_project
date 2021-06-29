import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ImageGalery from './ImageGalery';
import { product } from '../../../mokfiles/testingMock';
import store from '../../store/store';

describe('Image gallery test', () => {
  test('Image gallery smoke test', () => {
    const fn = jest.fn();
    render(
      <Provider store={store}>
        <ImageGalery product={product} buttonHandler={fn} initialSlide={1} />
      </Provider>
    );
  });
});
