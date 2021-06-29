import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button test', () => {
  test('Button smoke test', () => {
    render(<Button title='Buy' />);
  });
  test('Button title test', () => {
    const title = 'Buy';
    const { getByTestId } = render(<Button title={title} />);
    const button = getByTestId('button');
    expect(button).toContainHTML(title);
  });
  test('Button on click function test', () => {
    const fn = jest.fn();
    const { getByTestId } = render(<Button title='Buy' onClick={fn} />);
    const button = getByTestId('button');
    expect(fn).not.toBeCalled();
    userEvent.click(button);
    expect(fn).toBeCalled();
  });
});
