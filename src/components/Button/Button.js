/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ variant, title, onClick, disabled, type }) => {
  let className = '';

  if (variant === 'outline') {
    className = `${styles.button} ${styles.outline}`;
  } else if (variant === 'special') {
    className = `${styles.button} ${styles.examples} ${styles.special}`;
  } else {
    className = `${styles.button} ${styles.examples}`;
  }

  return (
    <>
      <button type={type} className={className} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: '',
  disabled: false,
  type: 'button',
};

export default Button;
