import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddFiltersForm from './AddFiltersForm/AddFiltersForm';
import FiltersList from './FiltersList/FiltersList';

const Filters = () => {
  const tabsData = [
    { name: 'Добавить тип фильтра', component: AddFiltersForm },
    { name: 'Список фильтров', component: FiltersList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Filters;
