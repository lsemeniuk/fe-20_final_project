import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import { getComments } from '../../../../http/commentAPI';
import CommentsItem from '../CommentsItem/CommentsItem';
import CommentsPagination from '../CommentsPagination/CommentsPagination';

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [refreshComments, setRefreshComments] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [сommentsQuantity, setСommentsQuantity] = useState(0);

  const perPage = 10;

  useEffect(() => {
    setCommentsLoading(true);
    getComments().then(res => {
      setComments(res.data);
      setСommentsQuantity(res.data);
      setRefreshComments(false);
      setCommentsLoading(false);
    });
  }, [refreshComments]);

  if (commentsLoading) {
    return <Loader />;
  }

  const commentsList = comments.map(comment => {
    return (
      <li key={comment} style={{ padding: '10px' }}>
        <CommentsItem comment={comment} />
      </li>
    );
  });

  return (
    <div>
      {commentsLoading ? <Loader /> : <ul>{commentsList}</ul>}
      <CommentsPagination
        perPage={perPage}
        startPage={startPage}
        setStartPage={setStartPage}
        сommentsQuantity={сommentsQuantity}
      />
    </div>
  );
};

export default CommentsList;
