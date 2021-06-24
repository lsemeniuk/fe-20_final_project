import React from 'react';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import UserInfo from './UserInfo/UserInfo';
import UserPass from './UserPass/UserPass';

const PersonalInfo = () => {
  const tabsData = [
    { name: 'Личные данные', component: UserInfo },
    { name: 'Изменить пароль', component: UserPass },
  ];
  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default PersonalInfo;
