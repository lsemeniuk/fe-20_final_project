import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContainerPage from '../../../../components/ContainerPage/ContainerPage';
import styles from './ProductEdit.module.scss';
import ProductEditForm from './ProductEditForm/ProductEditForm';

const ProductEdit = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ContainerPage>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>
            <div className={styles.tab}>Изменить Продукт</div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className={styles.form}>
            <ProductEditForm />
          </div>
        </TabPanel>
      </Tabs>
    </ContainerPage>
  );
};

export default ProductEdit;
