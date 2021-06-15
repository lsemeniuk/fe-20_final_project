/* eslint-disable react/no-danger */
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import styles from './InfoPanel.module.scss';
import Сharacteristics from './Сharacteristics/Сharacteristics';
import Reviews from './Reviews/Reviews';

const InfoPanel = ({ product, setTabIndex, tabIndex }) => {
  const { _id: id } = product;

  return (
    <div className={styles.container}>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>Описание</Tab>
          <Tab tabIndex='0'>Характеристики</Tab>
          <Tab tabIndex='0'>Отзывы</Tab>
        </TabList>
        <TabPanel>
          <div className={styles.tab}>
            <h3>
              Описание <span>{product.name}</span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: product?.description }} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.tab}>
            <Сharacteristics product={product} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.tab}>
            <Reviews productId={id} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

InfoPanel.propTypes = {
  product: PropTypes.object.isRequired,
  setTabIndex: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

export default InfoPanel;
