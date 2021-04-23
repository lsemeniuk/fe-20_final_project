import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styles from './MyText.module.scss';

const MyText = ({ name, ...rest }) => {
  const [field, meta /* helpers */] = useField(name); // *для чтения данных из Context

  return (
    <div>
      <textarea {...field} {...rest} className={styles.form__text} />
      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
    </div>
  );
};
MyText.propTypes = {
  name: PropTypes.string.isRequired,
};
export default MyText;
