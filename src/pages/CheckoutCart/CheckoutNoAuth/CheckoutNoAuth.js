import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import AuthCustomerTab from './AuthCustomerTab/AuthCustomerTab';
import styles from './CheckoutNoAuth.module.scss';
import NewCustomer from './NewCustomer/NewCustomer';
import QuickOrder from './QuickOrder/QuickOrder';

const CheckoutNoAuth = () => {
  const tabsData = [
    { name: 'Я новый покупатель', component: NewCustomer },
    { name: 'Я зарегистрированный покупатель', component: AuthCustomerTab },
    { name: 'Быстрый заказ', component: QuickOrder },
  ];
  return (
    <div className={styles.container}>
      <TabsCustom tabsData={tabsData} />
    </div>
  );
};

export default CheckoutNoAuth;
