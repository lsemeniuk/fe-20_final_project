import React from 'react';
import PropTypes from 'prop-types';

import { Field, Form, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';
import styles from './Select.module.scss';

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className={styles.checkbox_box}>
      <Form className={`${styles.option_list_sort} `}>
        <Field className={styles.option_select_list} as='select' id={name} name={name} {...rest}>
          {options.map(option =>
            option.type === label ? (
              <option className={styles.option_select} key={option._id} value={option.name}>
                {option.name}
              </option>
            ) : (
              ''
            )
          )}
        </Field>
      </Form>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}
Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Select;
