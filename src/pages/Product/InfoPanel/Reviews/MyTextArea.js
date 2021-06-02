/* eslint-disable react/prop-types */
import React from 'react';
import styles from './MyTextArea.module.scss';

const MyTextArea = ({ field, form, ...rest }) => (
  <div className={styles.center}>
    <textarea {...field} {...rest} />
    {form.errors[field.name] && form.touched[field.name] && (
      <span className={styles.error}>{form.errors[field.name]}</span>
    )}
  </div>
);

export default MyTextArea;
