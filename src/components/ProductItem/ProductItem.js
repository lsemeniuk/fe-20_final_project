import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Badge } from 'react-bootstrap';

import {
  wrapperStyle,
  imageStyle,
  itemDescriptionStyle,
  currentPriceStyle,
  previousPriceStyle,
  triangle,
  badgeStyle,
  favBtnStyle,
  priceSection,
  buttonsSection,
} from './ProductItem.style';

const ProductItem = props => {
  const { product } = props;
  const { img, isNew, title, currentPrice, previousPrice } = product;
  return (
    <>
      <div style={wrapperStyle}>
        <Card style={{ width: '18rem', display: 'inline-block' }}>
          <Card.Body>
            <Card.Img style={imageStyle} variant="top" src={img} />

            {isNew && (
              <Badge style={badgeStyle} variant="primary">
                <div style={triangle} />
                Новинка
              </Badge>
            )}

            <Card.Link title={title} href=" # " style={itemDescriptionStyle}>
              {title}
            </Card.Link>
            <div style={priceSection}>
              <Card.Text style={currentPriceStyle}>{currentPrice}</Card.Text>
              <Card.Text style={previousPriceStyle}>
                <s>{previousPrice}</s>
              </Card.Text>
            </div>
            <div style={buttonsSection}>
              <Button variant="primary">Купить</Button>
              <Button style={favBtnStyle}>Fav</Button>
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
