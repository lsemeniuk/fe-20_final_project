import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './MyCheckbox.module.scss';

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <label className={styles.label}>
          <input type='checkbox' className={styles.checkbox} {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? <div className={styles.error}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

MyCheckbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

MyCheckbox.defaultProps = {
  id: false,
};

export default MyCheckbox;
