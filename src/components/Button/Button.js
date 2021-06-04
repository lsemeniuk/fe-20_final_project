/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ variant, title, onClick, disabled, type, className }) => {
  let styleClass = '';

  if (variant === 'outline') {
    styleClass = `${styles.button} ${styles.outline}`;
  } else if (variant === 'special') {
    styleClass = `${styles.button} ${styles.examples} ${styles.special}`;
  } else if (variant === 'order') {
    styleClass = `${styles.button} ${styles.outline} ${styles.order}`;
  } else {
    styleClass = `${styles.button} ${styles.examples}`;
  }

  return (
    <>
      <button
        data-testid='button'
        type={type}
        className={`${styleClass} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: '',
  disabled: false,
  type: 'button',
  onClick: e => {
    return e;
  },
  className: '',
};

export default Button;
