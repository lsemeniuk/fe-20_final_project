import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './WishList.module.scss';
import Loader from '../../components/Loader/Loader';
import FavsClearModal from '../../components/modals/FavsModals/FavsClearModal';
import ProductItem from '../../components/ProductItem/ProductItem';
import { loadFavorites } from '../../store/favorites/actions';

const WishList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { data, isLoading } = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFavorites());
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <FavsClearModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className={styles.row}>
        <h1 className={styles.title}>Список желаний</h1>
        {data.length > 0 && (
          <span className={styles.clear} onClick={() => setModalOpen(true)}>
            Очистить
          </span>
        )}
      </div>
      {!data.length && <p>Вы еще не добавили товары в список желаний</p>}
      <div className={styles.inline}>
        {data.map(item => (
          <ProductItem key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
