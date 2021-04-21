/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ className, variant, title, onClick, disabled, type }) => {
  let style = '';

  if (variant === 'outline') {
    style = `${styles.button} ${styles.outline}`;
  } else if (variant === 'special') {
    style = `${styles.button} ${styles.examples} ${styles.special}`;
  } else if (!className) {
    style = `${styles.button} ${styles.examples}`;
  } else {
    style = className;
  }

  return (
    <>
      <button type={type} className={style} onClick={onClick} disabled={disabled}>
        {title}
      </button>
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
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
  className: undefined,
};

export default Button;
