import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddCategory from './AddCategory/AddCategory';
import DeleteCategory from './DeleteCategory/DeleteCategory';
import UpdateCategory from './UpdateCategory/UpdateCategory';
import styles from './Catalog.module.scss';

const Catalog = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ContainerPage>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>
            <div className={styles.tab}>Добавить Категорию</div>
          </Tab>
          <Tab tabIndex='0'>
            <div className={styles.tab}>Изменить Категорию</div>
          </Tab>
          <Tab tabIndex='0'>
            <div className={styles.tab}>Удалить Категорию</div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className={styles.form}>
            <AddCategory />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.form}>
            <UpdateCategory />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.form}>
            <DeleteCategory />
          </div>
        </TabPanel>
      </Tabs>
    </ContainerPage>
  );
};

export default Catalog;
