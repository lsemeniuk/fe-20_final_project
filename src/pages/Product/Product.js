import React from 'react';
import Container from '../../components/Container/Container';
import styles from './Product.module.scss';

const Product = () => {
  return (
    <main>
      <Container>
        <div className={styles.container}>Product</div>
      </Container>
    </main>
  );
};

export default Product;
