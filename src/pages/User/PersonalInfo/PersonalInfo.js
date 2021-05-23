import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import UserInfo from './UserInfo/UserInfo';
import UserPass from './UserPass/UserPass';

const PersonalInfo = () => {
  const tabsData = [
    { name: 'Информация о пользователе', component: UserInfo },
    { name: 'Изменить пароль', component: UserPass },
  ];
  return <TabsCustom tabsData={tabsData} />;
};

export default PersonalInfo;
