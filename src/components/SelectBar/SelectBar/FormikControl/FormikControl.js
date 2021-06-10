import React from 'react';
import PropTypes from 'prop-types';
import CheckboxGroup from '../CheckBoxGroup/CheckboxGroup';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'checkbox':
      return <CheckboxGroup {...rest} />;

    default:
      return null;
  }
}

FormikControl.propTypes = {
  control: PropTypes.string.isRequired,
};

export default FormikControl;
