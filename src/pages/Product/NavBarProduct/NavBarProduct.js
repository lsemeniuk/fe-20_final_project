import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../../../components/Container/Container';
import AddToCartButton from '../../../components/AddToCartButton/AddToCartButton';
import PriceBlock from '../../../components/PriceBlock/PriceBlock';
import styles from './NavBarProduct.module.scss';

const NavBarProduct = ({ product, setTabIndexInfo, infoRef, productRef, interestedRef }) => {
  const { previousPrice, currentPrice, _id: id } = product;
  const [showOrders, setShowOrders] = useState(false);

  const checkScrollOrders = () => {
    if (!showOrders && window.pageYOffset > 400) {
      setShowOrders(true);
    } else if (showOrders && window.pageYOffset <= 400) {
      setShowOrders(false);
    }
  };

  window.addEventListener('scroll', checkScrollOrders);

  let ordersStyles = {};
  if (showOrders) {
    ordersStyles = { opacity: '1', visibility: 'visible' };
  }

  const scrollToInfo = tabIndex => {
    window.scrollTo({ top: infoRef.current.offsetTop, behavior: 'smooth' });
    setTabIndexInfo(tabIndex);
  };

  const scrollTo = ref => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className={styles.navBarContainer}>
      <Container>
        <div className={styles.navBarFlex}>
          <nav className={styles.navBarProduct}>
            <span className={styles.navBarItem} onClick={() => scrollTo(productRef)}>
              Про товар
            </span>
            <span className={styles.navBarItem} onClick={() => scrollToInfo(0)}>
              Описание
            </span>
            <span className={styles.navBarItem} onClick={() => scrollToInfo(1)}>
              Характеристики
            </span>
            <span className={styles.navBarItem} onClick={() => scrollToInfo(2)}>
              Отзывы
            </span>
            <span className={styles.navBarItem} onClick={() => scrollTo(interestedRef)}>
              Отзывы
            </span>
          </nav>

          <div style={ordersStyles} className={styles.navBarOrder}>
            <AddToCartButton id={id} />
            <div className={styles.priceContainer}>
              <PriceBlock previousPrice={previousPrice} currentPrice={currentPrice} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

NavBarProduct.propTypes = {
  product: PropTypes.object.isRequired,
  setTabIndexInfo: PropTypes.func.isRequired,
  infoRef: PropTypes.object.isRequired,
  productRef: PropTypes.object.isRequired,
  interestedRef: PropTypes.object.isRequired,
};

export default NavBarProduct;
