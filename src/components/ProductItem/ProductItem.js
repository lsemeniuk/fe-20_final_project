import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Badge } from 'react-bootstrap';
import styles from './ProductItem.module.scss';

const ProductItem = props => {
  const { product } = props;
  const { imageUrls, isNew, name, currentPrice, previousPrice } = product;
  return (
    <>
      <div className={styles.wrapper}>
        <Card style={{ width: '18rem', display: 'inline-block' }}>
          <Card.Body>
            <Card.Img className={styles.image} variant='top' src={imageUrls[0]} />

            {isNew && (
              <Badge className={styles.badge} variant='primary'>
                <div className={styles.triangle} />
                Новинка
              </Badge>
            )}

            <Card.Link className={styles.itemDescription} title={name} href=' # '>
              {name}
            </Card.Link>
            <div className={styles.priceSection}>
              <Card.Text className={styles.currentPrice}>{currentPrice}</Card.Text>
              <Card.Text className={styles.previousPrice}>
                <s>{previousPrice}</s>
              </Card.Text>
            </div>
            <div className={styles.buttonsSection}>
              <Button variant='primary'>Купить</Button>
              <Button className={styles.favBtn}>Fav</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ProductItem;
