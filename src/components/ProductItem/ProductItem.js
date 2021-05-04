import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { PRODUCT_ROUTE } from '../../utils/consts';
import { favIcon } from '../../theme/icons';
import FavsRemoveModal from '../modals/FavsModals/FavsRemoveModal';
import styles from './ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const [inCart, setCart] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const [removeId, setRemoveId] = useState(null);
  const { image, isNew, name, price, previousPrice, itemNo, _id } = product;
  const buyOpenModal = () => {
    setCart(true);
    // eslint-disable-next-line no-console
    console.log('buy');
  };
  const openRemoveModal = () => {
    setRemoveModalOpen(true);
    setRemoveId(_id);
  };
  const addToFav = e => {
    const heartIcon = e.target.classList;
    heartIcon.toggle(styles.favIconActive);
  };

  return (
    <div className={styles.item}>
      <FavsRemoveModal removeModalOpen={removeModalOpen} removeId={removeId} setRemoveModalOpen={setRemoveModalOpen} />
      <div>
        <img className={styles.productImg} src={image} alt='watch' />
        <span className={styles.cross} onClick={() => openRemoveModal(_id)}>
          &times;
        </span>
      </div>
      {isNew && <div className={styles.newMessage}>Новинка</div>}
      <NavLink to={`${PRODUCT_ROUTE}/${itemNo}`}>
        <span className={styles.name}>{name}</span>
      </NavLink>

      <div className={styles.priceSection}>
        <p className={styles.currentPrice}>{price}грн</p>
        <p className={styles.previousPrice}>{previousPrice && <s>{previousPrice}грн</s>}</p>
      </div>

      <div className={styles.btnSection}>
        {!inCart ? (
          <Button onClick={buyOpenModal} type='button' title='Купить' />
        ) : (
          <Button onClick={buyOpenModal} variant='outline' type='button' title='В корзине' />
        )}
        <span className={styles.favIcon} onClick={addToFav}>
          {favIcon()}
        </span>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default ProductItem;
