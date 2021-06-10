import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Button/Button';
import Container from '../../Container/Container';
import ErrorGif from './Error500.gif';
import styles from './Error500.module.scss';

const Error500 = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  };

  return (
    <div className={styles.center}>
      <section className={styles.page_404}>
        <Container>
          <h1 className={styles.title}>Произошла ошибка!</h1>
        </Container>
        <div className={styles.fourZeroFourBg} style={{ backgroundImage: `url(${ErrorGif})` }}>
          {}
        </div>
        <Container>
          <div className={styles.contant_box_404}>
            <h3 className={styles.h2}>Скоро мы всё исправим!</h3>

            <p className={styles.p}>Наша команда уже работает над этой проблемой</p>

            <Button title='На главную' onClick={() => goToHome()} />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Error500;
