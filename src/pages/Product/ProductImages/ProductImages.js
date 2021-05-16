/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Viewer from 'react-viewer';
import styles from './ProductImages.module.scss';

const ProductImages = ({ images }) => {
  const [visible, setVisible] = useState(false);

  let imageSrc = [];

  imageSrc = images.map(img => {
    const src = { src: img };
    return src;
  });

  const imageList = images.map((image, index) => {
    return (
      <li key={index} className={styles.imageItem}>
        <span
          onClick={() => {
            setVisible(true);
          }}
        >
          <img src={image} className={styles.imageMin} alt='Product' />
        </span>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <ul className={styles.imageList}>{imageList}</ul>
      </div>
      <div className={styles.imageContainer}>
        <span
          onClick={() => {
            setVisible(true);
          }}
        >
          <img src={images[0]} className={styles.image} alt='Product' />
        </span>
      </div>

      <Viewer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={imageSrc}
      />
    </div>
  );
};

ProductImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductImages;
