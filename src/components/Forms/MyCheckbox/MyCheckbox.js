import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div>
      <label className='checkbox-input'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
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
