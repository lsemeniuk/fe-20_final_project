import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CategoriesList from './CategoriesList';
import store from '../../store/store';

describe('Categories list test', () => {
  test('Categories list smoke test', () => {
    render(
      <Provider store={store}>
        <CategoriesList />
      </Provider>
    );
  });
});
