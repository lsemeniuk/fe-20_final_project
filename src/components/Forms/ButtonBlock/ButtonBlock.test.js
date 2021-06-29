import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ButtonBlock from './ButtonBlock';

describe('Button block test', () => {
  test('Button block smoke test', () => {
    render(<ButtonBlock buttonTitle='button' />);
  });
  test('Test message server', () => {
    const messageServer = 'Error';
    const { getByTestId } = render(<ButtonBlock buttonTitle='button' messageServer={messageServer} />);
    const message = getByTestId('serverMessage');
    expect(message).toHaveTextContent(messageServer);
  });
});
