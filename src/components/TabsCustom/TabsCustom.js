import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './TabsCustom.module.scss';

const TabsCustom = ({ tabsData }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabList = tabsData.map(tab => {
    return (
      <Tab key={tab.name} tabIndex='0'>
        <div className={styles.tab}>{tab.name}</div>
      </Tab>
    );
  });

  const tabPanelList = tabsData.map(tab => {
    return (
      <TabPanel key={tab.name}>
        <div className={styles.form}>
          <tab.component />
        </div>
      </TabPanel>
    );
  });

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>{tabList}</TabList>

      {tabPanelList}
    </Tabs>
  );
};

TabsCustom.propTypes = {
  tabsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabsCustom;
