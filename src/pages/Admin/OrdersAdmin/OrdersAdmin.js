import React from 'react';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import OrdersList from './OrdersList/OrdersList';
import RefineOrder from './RefineOrder/RefineOrder';

const OrdersAdmin = () => {
  const tabsData = [
    { name: 'Список заказов', component: OrdersList },
    { name: 'Уточнить заказ', component: RefineOrder },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default OrdersAdmin;
