import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  return (
    <div className={styles.home}>
      <h1>First element of the project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Link to='/product/id' className={styles.link}>
        To a selected Product Screen
      </Link>
    </div>
  );
};

export default HomeScreen;
