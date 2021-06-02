/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './InfoPanel.module.scss';
import CommentAddForm from './Reviews/CommentAddForm';
import Сharacteristics from './Сharacteristics/Сharacteristics';
import Loader from '../../../components/Loader/Loader';
import { getAllCommentsOperation } from '../../../store/reviews/operations';
import Comment from './Reviews/Comment';
import CommentsFilter from './Reviews/CommentsFilter';

const InfoPanel = ({ product, setTabIndex, tabIndex }) => {
  const { isLoading, data } = useSelector(state => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommentsOperation());
  }, []);

  const commentsList = data.map(c => <Comment key={c._id} comment={c} />);

  return (
    <div className={styles.container}>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab tabIndex='0'>Описание</Tab>
          <Tab tabIndex='0'>Характеристики</Tab>
          <Tab tabIndex='0'>Отзывы</Tab>
        </TabList>
        <TabPanel>
          <div className={styles.tab}>
            <h3>
              Описание <span>{product.name}</span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: product?.description }} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className={styles.tab}>
            <Сharacteristics product={product} />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <CommentAddForm />
            <CommentsFilter />
            {isLoading ? <Loader /> : <ul className={styles.comments__container}>{commentsList}</ul>}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

InfoPanel.propTypes = {
  product: PropTypes.object.isRequired,
  setTabIndex: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
};

export default InfoPanel;
