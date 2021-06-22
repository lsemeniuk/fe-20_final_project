import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';

import CommentsList from './CommentsList/CommentsList';

const Comments = () => {
  const tabsData = [{ name: 'Список комментариев', component: CommentsList }];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Comments;
