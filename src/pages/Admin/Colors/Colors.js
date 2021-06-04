import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddColorsForm from './AddColorsForm/AddColorsForm';
import ColorsList from './ColorsList/ColorsList';
<<<<<<< HEAD
// import ColorsList from './BrandsList/BrandsList';
=======
>>>>>>> f90998696fe377bcef61758f6db83d931f9f5c5e

const Colors = () => {
  const tabsData = [
    { name: 'Добавить цвета', component: AddColorsForm },
    { name: 'Список цветов', component: ColorsList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Colors;
