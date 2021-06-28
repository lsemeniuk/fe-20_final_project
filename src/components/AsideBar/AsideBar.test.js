import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AsideBar from './AsideBar';
import store from '../../store/store';
import { adminRoutes } from '../../routes/routes';

const links = adminRoutes.map(route => {
  return { url: route.path, description: route.name };
});

describe('Aside bar test', () => {
  test('Aside bar smoke test', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AsideBar links={links} />
        </BrowserRouter>
      </Provider>
    );
  });
});
