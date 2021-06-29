import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import styles from './ButtonBlock.module.scss';

const ButtonBlock = ({ buttonTitle, messageServer }) => {
  return (
    <div className={styles.buttonCont}>
      <div className={styles.widthCont}>
        <Button type='submit' title={buttonTitle} />
        <div data-testid='serverMessage' className={styles.redTitle}>
          {messageServer}
        </div>
      </div>
    </div>
  );
};

ButtonBlock.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  messageServer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ButtonBlock.defaultProps = {
  messageServer: '',
};

export default ButtonBlock;
