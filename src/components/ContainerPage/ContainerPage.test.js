import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ContainerPage from './ContainerPage';

describe('Container page test', () => {
  test('Container page smoke test', () => {
    render(
      <ContainerPage>
        <p>Test</p>
      </ContainerPage>
    );
  });
});
