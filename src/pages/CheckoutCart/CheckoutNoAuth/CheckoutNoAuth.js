import React from 'react';

import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import AddCategoryForm from '../../Admin/Catalog/AddCategoryForm/AddCategoryForm';
import AuthCustomerTab from './AuthCustomerTab/AuthCustomerTab';
import styles from './CheckoutNoAuth.module.scss';
import NewCustomer from './NewCustomer/NewCustomer';

const CheckoutNoAuth = () => {
  const tabsData = [
    { name: 'Я новый покупатель', component: NewCustomer },
    { name: 'Я зарегистрированный покупатель', component: AuthCustomerTab },
    { name: 'Быстрый заказ', component: AddCategoryForm },
  ];
  return (
    <div className={styles.container}>
      <TabsCustom tabsData={tabsData} />
    </div>
  );
};

export default CheckoutNoAuth;
