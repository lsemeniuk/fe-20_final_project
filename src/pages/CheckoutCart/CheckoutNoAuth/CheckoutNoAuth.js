import React from 'react';
import AuthForm from '../../../components/RegAuth/AuthForm/AuthForm';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import AddCategoryForm from '../../Admin/Catalog/AddCategoryForm/AddCategoryForm';
import styles from './CheckoutNoAuth.module.scss';

const CheckoutNoAuth = () => {
  const tabsData = [
    { name: 'Я новый покупатель', component: AddCategoryForm },
    { name: 'Я зарегистрированный покупатель', component: AuthForm },
    { name: 'Быстрый заказ', component: AddCategoryForm },
  ];
  return (
    <div className={styles.container}>
      <TabsCustom tabsData={tabsData} />
    </div>
  );
};

export default CheckoutNoAuth;
