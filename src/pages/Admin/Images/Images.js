import React from 'react';
import AddImageForm from './AddImageForm/AddImageForm';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ImagesList from './ImagesList/ImagesList';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';

const Images = () => {
  const tabsData = [
    { name: 'Добавить картинку', component: AddImageForm },
    { name: 'Список картинок', component: ImagesList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Images;
