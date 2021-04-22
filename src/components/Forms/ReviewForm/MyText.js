import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
// todo в Реакте есть только 2 варианта прочитать данные в Дочернем компоненте: PROPS и CONTEXT (он же например, redux store)
const MyText = ({ name, ...rest }) => {
  const [field, meta /* helpers */] = useField(name); // *для чтения данных из Context

  return (
    <div>
      <textarea {...field} {...rest} />
      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
    </div>
  );
};
MyText.propTypes = {
  name: PropTypes.string.isRequired,
};
export default MyText;
