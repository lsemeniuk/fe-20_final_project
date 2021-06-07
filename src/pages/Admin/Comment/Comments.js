import React from 'react';
import TabsCustom from '../../../components/TabsCustom/TabsCustom';
import ContainerPage from '../../../components/ContainerPage/ContainerPage';
import AddCommentsForm from './AddCommentsForm/AddCommentsForm';
import CommentsList from './CommentsList/CommentsList';

const Comments = () => {
  const tabsData = [
    { name: 'Добавить комментарии', component: AddCommentsForm },
    { name: 'Список комментариев', component: CommentsList },
  ];

  return (
    <ContainerPage>
      <TabsCustom tabsData={tabsData} />
    </ContainerPage>
  );
};

export default Comments;
