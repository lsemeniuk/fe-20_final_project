import React from 'react';

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

const productCart = [
  {
    img: 'https://design109.horoshop.ua/content/images/34/240x240l85nn0/92761730995855.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '1000 грн',
    previousPrice: '1200 грн',
    isNew: false,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/33/240x240l85nn0/40233376444154.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '2000 грн',
    previousPrice: '1200 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/35/240x240l85nn0/48272048070578.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '4562 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/30/240x240l85nn0/62428467162146.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '68745 грн',
    previousPrice: '1200 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/29/240x240l85nn0/68354208744341.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '4563 грн',
    previousPrice: '785 грн',
    isNew: true,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/34/240x240l85nn0/92761730995855.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '64454 грн',
    previousPrice: '854135 грн',
    isNew: false,
  },
  {
    img: 'https://design109.horoshop.ua/content/images/24/240x240l85nn0/86840362163261.jpeg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Acusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '8554 грн',
    previousPrice: '9221 грн',
    isNew: true,
  },
  {
    img:
      'https://design109.horoshop.ua/content/images/17/240x240l85nn0/' +
      'smart-chasy-samsung-galaxy-watch-46mm-silver-sm-r800nzsasek-85420148595511.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '154512 грн',
    isNew: false,
  },
  {
    img:
      'https://design109.horoshop.ua/content/images/16/240x240l85nn0/' +
      'smart-chasy-apple-watch-series-4-40mm-gold-aluminium-with-pink-sand-sport-band-17802334110129.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Accusantium atque minima nobis provident sunt? Officiis.',
    currentPrice: '9865 грн',
    previousPrice: '5130 грн',
    isNew: true,
  },
];

const ProductItem = () => {
  const isAuth = false;
  const renderTooltip = () => (
    <Tooltip id="button-tooltip">Войдите на сайт чтобы добавить товар в список желаний</Tooltip>
  );
  return (
    <>
      {productCart.map(i => {
        return (
          <div style={wrapperStyle}>
            <Card style={{ width: '18rem', display: 'inline-block' }}>
              <Card.Body>
                <Card.Img style={imageStyle} variant="top" src={i.img} />

                {i.isNew && (
                  <Badge style={badgeStyle} variant="primary">
                    <div style={triangle} />
                    Новинка
                  </Badge>
                )}

                <Card.Link title={i.title} href=" # " style={itemDescriptionStyle}>
                  {i.title}
                </Card.Link>
                <Card.Text style={currentPriceStyle}>{i.currentPrice}</Card.Text>
                <Card.Text style={previousPriceStyle}>
                  <s>{i.previousPrice}</s>
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
        );
      })}
    </>
  );
};

export default ProductItem;
