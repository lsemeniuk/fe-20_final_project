import React from 'react';
import AddCategoryForm from './AddCategoryForm/AddCategoryForm';
import UpdateCategory from './UpdateCategory/UpdateCategory';
import DeleteCategory from './DeleteCategory/DeleteCategory';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';

const Catalog = () => {
  const tabsDate = [
    { name: 'Добавить категорию', component: AddCategoryForm },
    { name: 'Изменить категорию', component: UpdateCategory },
    { name: 'Удалить категорию', component: DeleteCategory },
  ];

  return <TabsCustom tabsDate={tabsDate} />;
};

export default Catalog;
