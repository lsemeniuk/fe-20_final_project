import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import ImagesItem from '../ImagesItem/ImagesItem';
import { getImages } from '../../../../http/imagesAPI';
import Pagination from '../../../../components/Pagination/Pagination';
import styles from './ImagesList.module.scss';

const ImagesList = () => {
  const [images, setImages] = useState(null);
  const [imagesloading, setImagesLoading] = useState(true);
  const [refreshloading, setRefreshLoading] = useState(true);
  const [affiliation, setAffiliation] = useState('products');
  const [startPage, setStartPage] = useState(1);
  const [imagesQuantity, setImagesQuantity] = useState(0);

  const perPage = 15;

  const filters = { sort: '-date', perPage, startPage, affiliation };

  useEffect(() => {
    setImagesLoading(true);
    getImages(filters).then(res => {
      setImages(res.data.images);
      setImagesQuantity(res.data.imagesQuantity);
      setImagesLoading(false);
      setRefreshLoading(false);
    });
  }, [refreshloading, startPage]);

  let imagesList = null;

  if (!imagesloading) {
    imagesList = images.map(image => {
      return (
        <li key={image.name} style={{ padding: '10px' }}>
          <ImagesItem image={image} setRefreshLoading={setRefreshLoading} />
        </li>
      );
    });
  }

  return (
    <div>
      <div className={styles.selectContainer}>
        <select
          onChange={e => {
            setAffiliation(e.target.value);
            setRefreshLoading(true);
          }}
          defaultValue={null}
          className={styles.select}
        >
          <option value='products'>Товары</option>
          <option value='sliders'>Слайдер</option>
          <option value='brands'>Бренды</option>
          <option value='catalog'>Каталог</option>
        </select>
      </div>
      {imagesloading ? <Loader /> : <ul>{imagesList}</ul>}
      <Pagination perPage={perPage} startPage={startPage} setPage={setStartPage} productsQuantity={imagesQuantity} />
    </div>
  );
};

export default ImagesList;
