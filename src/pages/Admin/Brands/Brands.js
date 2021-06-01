import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddBrandsForm from './AddBrandsForm/AddBrandsForm';
import BrandsList from './BrandsList/BrandsList';

const Brands = () => {
  const tabsData = [
    { name: 'Добавить бренд', component: AddBrandsForm },
    { name: 'Список брендов', component: BrandsList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Brands;
