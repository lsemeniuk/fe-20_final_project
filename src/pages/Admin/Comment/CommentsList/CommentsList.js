import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import { getComments } from '../../../../http/commentAPI';
import CommentsItem from '../CommentsItem/CommentsItem';

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [refreshComments, setRefreshComments] = useState(true);

  useEffect(() => {
    setCommentsLoading(true);
    getComments().then(res => {
      setComments(res.data);
      setRefreshComments(false);
      setCommentsLoading(false);
    });
  }, [refreshComments]);

  if (commentsLoading) {
    return <Loader />;
  }

  const commentsList = comments.map(comment => {
    return (
      <li key={comment.name}>
        <CommentsItem comment={comment} />
      </li>
    );
  });

  return (
    <div>
      <ul>{commentsList}</ul>
    </div>
  );
};

export default CommentsList;
