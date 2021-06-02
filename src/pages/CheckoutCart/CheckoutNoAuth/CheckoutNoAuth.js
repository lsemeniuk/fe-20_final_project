import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import AuthCustomerTab from './AuthCustomerTab/AuthCustomerTab';
import NewCustomer from './NewCustomer/NewCustomer';
import QuickOrder from './QuickOrder/QuickOrder';

const CheckoutNoAuth = () => {
  const tabsData = [
    { name: 'Новый покупатель', component: NewCustomer },
    { name: 'Есть аккаунт', component: AuthCustomerTab },
    { name: 'Быстрый заказ', component: QuickOrder },
  ];
  return <TabsCustom tabsData={tabsData} />;
};

export default CheckoutNoAuth;
