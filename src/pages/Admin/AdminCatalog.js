import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './AdminCatalog.module.scss';
import PageContainer from '../../components/Container/PageContainer/PageContainer';
import AddCategory from './AddCategory/AddCategory';
import UpdateCategory from './UpdateCategory/UpdateCategory';
import DeleteCategory from './DeleteCategory/DeleteCategory';

const AdminCatalog = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <PageContainer>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>
            <div className={styles.tab}>Новая Категория</div>
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
    </PageContainer>
  );
};

export default AdminCatalog;
