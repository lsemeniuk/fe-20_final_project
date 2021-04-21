import React from 'react';
import Container from '../Container/Container';
import styles from './Header.module.scss';

function Header() {
  return (
    <Container>
      <header className={styles.header}>This is Header</header>
    </Container>
  );
}

export default Header;
