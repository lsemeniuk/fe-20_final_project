import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './MyTextInput.module.scss';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={styles.textInput} {...field} {...props} />
      {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
    </div>
  );
};

MyTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MyTextInput;
