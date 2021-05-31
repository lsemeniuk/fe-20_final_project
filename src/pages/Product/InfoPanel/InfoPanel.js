/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './InfoPanel.module.scss';
import Сharacteristics from './Сharacteristics/Сharacteristics';
import ReviewsForm from './Reviews/ReviewsForm';
import Loader from '../../../components/Loader/Loader';
import { getAllCommentsOperation } from '../../../store/reviews/operations';

const InfoPanel = ({ product, setTabIndex, tabIndex }) => {
  const { isLoading, data } = useSelector(state => state.reviews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommentsOperation());
  }, [data]);

  const commentsList = data.map(c => <li key={c._id}>{c.content}</li>);
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
            <ReviewsForm />
            {isLoading ? <Loader /> : <ul>{commentsList}</ul>}
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
