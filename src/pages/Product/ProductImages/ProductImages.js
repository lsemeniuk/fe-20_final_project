/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactBnbGallery from 'react-bnb-gallery';
import ReactImageMagnify from 'react-image-magnify';
import './react-bnb-gallery.scss';
import styles from './ProductImages.module.scss';

const ProductImages = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [displayImage, setDisplayImage] = useState(0);

  const bnbGaleryProps = {
    activePhotoIndex: activePhoto,
    preloadSize: 2,
    opacity: 0.6,
    show: isOpen,
    photos: images,
    onClose: () => setIsOpen(false),
  };

  const imageList = images.map((image, index) => {
    return (
      <li key={index} className={`${styles.imageItem} ${index === displayImage ? styles.imageMinActive : ''}`}>
        <span
          onClick={() => {
            setIsOpen(true);
            setActivePhoto(index);
          }}
          onMouseEnter={() => {
            setDisplayImage(index);
          }}
        >
          <img src={image} className={styles.imageMin} alt='Product' />
        </span>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <div>
        <ul>{imageList}</ul>
      </div>
      <div className={styles.imageContainer}>
        <span
          onClick={() => {
            setIsOpen(true);
            setActivePhoto(0);
          }}
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Картинка продукта',
                isFluidWidth: true,
                src: images[displayImage],
              },
              largeImage: {
                src: images[displayImage],
                width: 1200,
                height: 1200,
              },
            }}
          />
        </span>
      </div>
      <ReactBnbGallery {...bnbGaleryProps} />
    </div>
  );
};

ProductImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductImages;
