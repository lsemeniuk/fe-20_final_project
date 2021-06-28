import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GenderLink from './GenderLink';
import store from '../../store/store';

const img = 'https://res.cloudinary.com/vdsh/image/upload/v1619083373/forMan_aldinh.png';

describe('Gender link test', () => {
  test('Gender link smoke test', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GenderLink textContent='Woman' img={img} forWho='Woman' />
        </BrowserRouter>
      </Provider>
    );
  });
});
