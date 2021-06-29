import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddSlidersForm from './AddSlidersForm/AddSlidersForm';
import SlidersList from './SlidersList/SlidersList';

const Sliders = () => {
  const tabsData = [
    { name: 'Добавить слайдер', component: AddSlidersForm },
    { name: 'Список слайдеров', component: SlidersList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Sliders;
