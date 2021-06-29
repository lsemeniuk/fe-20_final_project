import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ModalConfirm from './ModalConfirm';

describe('Modal confirm tests', () => {
  test('Modal confirm smoke test', () => {
    const fn = jest.fn();
    const action = jest.fn();
    render(<ModalConfirm setModalOpen={fn} buttonTitle='Button' content='Content' action={action} />);
  });
  test('Modal confirm content test', () => {
    const setModalOpen = jest.fn();
    const action = jest.fn();
    const propsContent = 'Content';
    const { getByTestId } = render(
      <ModalConfirm setModalOpen={setModalOpen} buttonTitle='Button' content={propsContent} action={action} />
    );
    const content = getByTestId('content');
    expect(content).toHaveTextContent(propsContent);
  });
});
