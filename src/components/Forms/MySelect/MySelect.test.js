import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Formik } from 'formik';
import MySelect from './MySelect';

const label = 'Test';
const name = 'Name test';

describe('My select test', () => {
  test('My select smoke test', () => {
    const onSubmit = jest.fn();
    render(
      <Formik initialValues='test' onSubmit={onSubmit}>
        <MySelect label={label} name={name} />
      </Formik>
    );
  });
});
