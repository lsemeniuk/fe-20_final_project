import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

import {
  wrapperStyle,
  imageStyle,
  itemDescriptionStyle,
  currentPriceStyle,
  previousPriceStyle,
  triangle,
  badgeStyle,
  favBtnStyle,
} from './ProductItem.style';

const ProductItem = props => {
  const { product } = props;
  const { img, isNew, title, currentPrice, previousPrice } = product;

  const isAuth = false;
  const renderTooltip = () => (
    <Tooltip id="button-tooltip">Войдите на сайт чтобы добавить товар в список желаний</Tooltip>
  );
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
            <Card.Text style={currentPriceStyle}>{currentPrice}</Card.Text>
            <Card.Text style={previousPriceStyle}>
              <s>{previousPrice}</s>
            </Card.Text>

            <div>
              <Button variant="primary">Купить</Button>
              {!isAuth ? (
                <OverlayTrigger placement="top" delay={{ show: 150, hide: 100 }} overlay={renderTooltip}>
                  <Button style={favBtnStyle} variant="success">
                    Heart
                  </Button>
                </OverlayTrigger>
              ) : (
                <Button style={favBtnStyle}>Heart</Button>
              )}
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
