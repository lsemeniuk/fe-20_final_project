import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import UserInfo from './UserInfo/UserInfo';
import UserPass from './UserPass/UserPass';

const PersonalInfo = () => {
  const tabsDate = [
    { name: 'Информация о пользователе', component: UserInfo },
    { name: 'Изменить пароль', component: UserPass },
  ];
  return <TabsCustom tabsDate={tabsDate} />;
};

export default PersonalInfo;
