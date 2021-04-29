import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Error500.module.scss';
import deathStar from './death-star.png';

const Error500 = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push('/');
  };

  return (
    <div className={styles.error}>
      <div>
        <img className={styles.img} src={deathStar} alt='death-star' />
      </div>
      <h3 className={styles.h3}>An error has occurred</h3>
      <h4>But we already sent droids to fix it</h4>
      <div>
        <button type='button' onClick={goToHome}>
          Go to home page
        </button>
      </div>
    </div>
  );
};

export default Error500;
