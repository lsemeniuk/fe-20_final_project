import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination test', () => {
  test('Pagination smoke test', () => {
    const setPage = jest.fn();
    render(<Pagination perPage={9} startPage={1} setPage={setPage} />);
  });
  test('Pagination next arrow test', () => {
    const setPage = jest.fn();
    const { getByTestId } = render(<Pagination productsQuantity={10} perPage={9} startPage={1} setPage={setPage} />);
    const nextBtn = getByTestId('next');
    expect(setPage).not.toBeCalled();
    userEvent.click(nextBtn);
    expect(setPage).toBeCalled();
  });
  test('Pagination next arrow disabled test', () => {
    const setPage = jest.fn();
    const { getByTestId } = render(<Pagination productsQuantity={8} perPage={9} startPage={1} setPage={setPage} />);
    const nextBtn = getByTestId('next');
    expect(setPage).not.toBeCalled();
    userEvent.click(nextBtn);
    expect(setPage).not.toBeCalled();
  });
  test('Pagination prev arrow test', () => {
    const setPage = jest.fn();
    const { getByTestId } = render(<Pagination productsQuantity={18} perPage={9} startPage={2} setPage={setPage} />);
    const prevBtn = getByTestId('prev');
    expect(setPage).not.toBeCalled();
    userEvent.click(prevBtn);
    expect(setPage).toBeCalled();
  });
  test('Pagination prev arrow disable test', () => {
    const setPage = jest.fn();
    const { getByTestId } = render(<Pagination productsQuantity={9} perPage={9} startPage={1} setPage={setPage} />);
    const prevBtn = getByTestId('prev');
    userEvent.click(prevBtn);
    expect(setPage).not.toBeCalled();
  });
});
