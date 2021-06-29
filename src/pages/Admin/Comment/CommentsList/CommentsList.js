import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import { getComments } from '../../../../http/commentAPI';
import Pagination from '../../../../components/Pagination/Pagination';
import CommentsItem from '../CommentsItem/CommentsItem';

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [startPage, setStartPage] = useState(1);
  const [commentsQuantity, setCommentsQuantity] = useState(0);

  const perPage = 15;

  const filters = { sort: '-date', perPage, startPage };

  useEffect(() => {
    setCommentsLoading(true);
    getComments(filters).then(res => {
      setComments(res.data.comments);
      setCommentsQuantity(res.data.commentsQuantity);
      setCommentsLoading(false);
    });
  }, [startPage]);

  if (commentsLoading) {
    return <Loader />;
  }

  const commentsList = comments.map(comment => {
    const { _id: id } = comment;
    return (
      <li key={id} style={{ padding: '10px' }}>
        <CommentsItem comment={comment} />
      </li>
    );
  });

  return (
    <div>
      {commentsLoading ? <Loader /> : <ul>{commentsList}</ul>}
      <Pagination perPage={perPage} startPage={startPage} setPage={setStartPage} productsQuantity={commentsQuantity} />
    </div>
  );
};

export default CommentsList;
