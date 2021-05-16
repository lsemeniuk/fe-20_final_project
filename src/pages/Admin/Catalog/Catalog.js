import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import AddCategory from './AddCategory/AddCategory';
import CategoriesList from './CategoriesList/CategoriesList';

const Catalog = () => {
  const tabsData = [
    { name: 'Добавить категорию', component: AddCategory },
    { name: 'Список категорий', component: CategoriesList },
  ];

  return <TabsCustom tabsData={tabsData} />;
};

export default Catalog;
