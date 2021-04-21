import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ variant, title, onClick, disabled = false }) => {
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
      <button type='button' className={className} onClick={onClick} disabled={disabled}>
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
};

Button.defaultProps = {
  variant: '',
  disabled: false,
};

export default Button;
