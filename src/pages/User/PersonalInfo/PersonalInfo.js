import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import UserInfo from './UserInfo/UserInfo';
import styles from './PersonalInfo.module.scss';
import UserPass from './UserPass/UserPass';

const PersonalInfo = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ContainerPage>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>
            <div className={styles.tab}>Информация о пользователе</div>
          </Tab>
          <Tab tabIndex='0'>
            <div className={styles.tab}>Изменить пароль</div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className={styles.form}>
            <UserInfo />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.form}>
            <UserPass />
          </div>
        </TabPanel>
      </Tabs>
    </ContainerPage>
  );
};

export default PersonalInfo;
