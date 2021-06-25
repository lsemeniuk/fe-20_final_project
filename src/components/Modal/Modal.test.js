import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal tests', () => {
  test('Modal smoke test', () => {
    const fn = jest.fn();
    render(
      <Modal buttonHandler={fn}>
        <p>Modal test</p>
      </Modal>
    );
  });
  test('Close modal test', () => {
    const fn = jest.fn();
    const { getByTestId } = render(
      <Modal buttonHandler={fn}>
        <p>Modal test</p>
      </Modal>
    );
    const modalWrapper = getByTestId('modalWrapper');
    expect(modalWrapper).toBeInTheDocument();
    userEvent.click(modalWrapper);
    expect(fn).toBeCalled();
  });
});
