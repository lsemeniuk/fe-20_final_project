import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination test', () => {
  test('Pagination smoke test', () => {
    const setPage = jest.fn();
    render(<Pagination perPage={9} startPage={1} setPage={setPage} />);
  });
});
