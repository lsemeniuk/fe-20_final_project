import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddSlidersForm from './AddSlidersForm/AddSlidersForm';

const Sliders = () => {
  const tabsData = [
    { name: 'Добавить слайдер', component: AddSlidersForm },
    { name: 'Список слайдеров', component: AddSlidersForm },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Sliders;
