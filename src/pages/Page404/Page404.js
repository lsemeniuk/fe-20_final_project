import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import logo from '../../theme/logo404.png';
import { INDEX_ROUTE } from '../../utils/consts';
import styles from './Page404.module.scss';

const Page404 = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.notfound}>
        <div>
          <h1 className={styles.title}>УПС!</h1>
          <h2 className={styles.subTitle}>Error 404 : Страницу не найдено</h2>
          <Button onClick={() => history.push(INDEX_ROUTE)} title='На главную' />
        </div>
        <img className={styles.img} src={logo} alt='404 ERROR' />
      </div>
    </div>
  );
};

export default Page404;
