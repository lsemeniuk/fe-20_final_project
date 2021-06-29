import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Formik } from 'formik';
import MyCheckbox from './MyCheckbox';

describe('My checkbox test', () => {
  test('My checkbox smoke test', () => {
    const onSubmit = jest.fn();
    render(
      <Formik initialValues='test' onSubmit={onSubmit}>
        <MyCheckbox name='test'>
          <p>Test</p>
        </MyCheckbox>
      </Formik>
    );
  });
});
