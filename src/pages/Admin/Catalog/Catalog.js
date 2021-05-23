import React from 'react';
import AddCategoryForm from './AddCategoryForm/AddCategoryForm';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import CategoriesList from './CategoriesList/CategoriesList';

const Catalog = () => {
  const tabsData = [
    { name: 'Добавить категорию', component: AddCategoryForm },
    { name: 'Список категорий', component: CategoriesList },
  ];

  return <TabsCustom tabsData={tabsData} />;
};

export default Catalog;
