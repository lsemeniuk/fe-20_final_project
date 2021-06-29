import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ContainerAside from './ContainerAside';

describe('Aside container test', () => {
  test('Aside container smoke test', () => {
    render(
      <ContainerAside>
        <p>Test</p>
      </ContainerAside>
    );
  });
});
