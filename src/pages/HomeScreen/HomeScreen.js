import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import CartModal from '../../components/modals/CartModal';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.home}>
      <h1>First element of the project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button onClick={showModal}>Купить часы</Button>
      <Link to="/product/currentID" className={styles.link}>
        To a selected Product Screen
      </Link>
      <CartModal isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
};

export default HomeScreen;
