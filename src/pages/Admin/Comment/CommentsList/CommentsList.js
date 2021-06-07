import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../../../../components/Loader/Loader';
// import { getColorsOperation } from '../../../../store/colors/operations';
// import { colorsLoadingSelector, getColorsSelector } from '../../../../store/colors/selectors';
import CommentsItem from '../CommentsItem/CommentsItem';

const CommentsList = () => {
  // const dispatch = useDispatch();
  // const comment = useSelector(getColorsSelector);
  // const colorsLoading = useSelector(colorsLoadingSelector);

  // useEffect(() => {
  //   dispatch(getCommitsOperation());
  // }, []);

  // if (colorsLoading) {
  //   return <Loader />;
  // }

  // const commentList = colors.map(color => {
  //   return (
  //     <li key={color.name} style={{ padding: '10px' }}>
  //       <ColorsItem color={color} />
  //     </li>
  //   );
  // });

  return <CommentsItem />;
};

export default CommentsList;
