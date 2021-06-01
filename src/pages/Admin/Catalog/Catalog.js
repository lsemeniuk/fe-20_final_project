import React from 'react';
import AddCategoryForm from './AddCategoryForm/AddCategoryForm';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import CategoriesList from './CategoriesList/CategoriesList';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';

const Catalog = () => {
  const tabsData = [
    { name: 'Добавить категорию', component: AddCategoryForm },
    { name: 'Список категорий', component: CategoriesList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Catalog;
