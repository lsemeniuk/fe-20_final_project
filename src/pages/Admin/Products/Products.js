import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddProducts from './AddProducts/AddProducts';
import ProductsList from './ProductsList/ProductsList';

const Products = () => {
  const tabsData = [
    { name: 'Добавить продукт', component: AddProducts },
    { name: 'Список продуктов', component: ProductsList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Products;
