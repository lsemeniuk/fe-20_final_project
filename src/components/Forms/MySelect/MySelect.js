import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  );
};

MySelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

MySelect.defaultProps = {
  id: false,
};

export default MySelect;
