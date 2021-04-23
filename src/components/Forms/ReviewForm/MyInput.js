/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './MyInput.module.scss';

const MyInput = ({ name, ...rest }) => {
  const [field, meta /* helpers */] = useField(name); // *для чтения данных из Context

  return (
    <div>
      <input {...field} {...rest} className={styles.form__input} />
      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
    </div>
  );
};
MyInput.propTypes = {
  name: PropTypes.string.isRequired,
};
export default MyInput;
