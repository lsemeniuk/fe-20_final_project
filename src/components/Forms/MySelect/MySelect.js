import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './MySelect.module.scss';

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  let border = {};
  if (meta.touched && meta.error) {
    border = { borderColor: 'red' };
  }

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <label className={styles.label} htmlFor={props.name}>
          {label}
        </label>
        <select className={styles.select} {...field} {...props} style={border} />
        {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

MySelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MySelect;
