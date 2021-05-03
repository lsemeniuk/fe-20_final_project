import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import style from './CustomerSection.module.scss';

const MyInput = ({ name, ...rest }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <input {...field} {...rest} />
      {meta.error && meta.touched && <span className={style.error}>{meta.error}</span>}
    </div>
  );
};
MyInput.propTypes = {
  name: PropTypes.string.isRequired,
};
export default MyInput;
