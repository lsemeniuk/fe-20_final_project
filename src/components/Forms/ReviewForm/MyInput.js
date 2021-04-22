/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
// todo в Реакте есть только 2 варианта прочитать данные в Дочернем компоненте: PROPS и CONTEXT (он же например, redux store)
const MyInput = ({ name, ...rest }) => {
  const [field, meta /* helpers */] = useField(name); // *для чтения данных из Context

  return (
    <div>
      <input {...field} {...rest} />
      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
    </div>
  );
};
MyInput.propTypes = {
  name: PropTypes.string.isRequired,
};
export default MyInput;
