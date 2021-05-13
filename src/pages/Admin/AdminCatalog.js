import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './AdminCatalog.module.scss';
import ContainerPage from '../../components/ContainerPage/ContainerPage';
import AddCategoryForm from './AddCategoryForm/AddCategoryForm';
import UpdateCategoryForm from './UpdateCategoryForm/UpdateCategoryForm';
import DeleteCategoryForm from './DeleteCategoryForm/DeleteCategoryForm';

const AdminCatalog = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ContainerPage>
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
            <AddCategoryForm />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.form}>
            <UpdateCategoryForm />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.form}>
            <DeleteCategoryForm />
          </div>
        </TabPanel>
      </Tabs>
    </ContainerPage>
  );
};

export default AdminCatalog;
