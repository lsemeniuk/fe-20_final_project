import React from 'react';
import { render, test, describe } from '@testing-library/react';
import ProductItem from './ProductItem';

describe('Test product item component', () => {
  test('smoke item test', () => {
    render(<ProductItem />);
  });
  // остальные тесты допишу потом, когда в компонент будут приходить какие-то пропсы
});
