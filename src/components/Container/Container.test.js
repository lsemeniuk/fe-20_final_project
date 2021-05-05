/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Container from './Container';

describe('Testing Container.js', () => {
  const text = 'Test-contant';
  const children = <div data-testid='testBlock'>{text}</div>;

  test('Smoke test of Container', () => {
    render(<Container>{children}</Container>);
  });

  test('Add children in Container', () => {
    const { getByTestId } = render(<Container>{children}</Container>);

    const testBlock = getByTestId('testBlock', text);
    expect(testBlock).toBeInTheDocument();
  });
});
