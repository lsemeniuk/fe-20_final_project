/* eslint-disable react/no-danger */
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import styles from './InfoPanel.module.scss';

const InfoPanel = ({ product, setTabIndex, tabIndex }) => {
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
            <div dangerouslySetInnerHTML={{ __html: product?.description }} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.tab}>Сharacteristics</div>
        </TabPanel>
        <TabPanel>
          <div className={styles.tab}>Reviews</div>
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
