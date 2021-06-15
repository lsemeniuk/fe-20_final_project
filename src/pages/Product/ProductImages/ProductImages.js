/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import { brandsLoadingSelector, getBrandsSelector } from '../../../store/brands/selectors';
import { getBrandsOperation } from '../../../store/brands/operations';
import ImageGalery from '../../../components/ImageGalery/ImageGalery';
import styles from './ProductImages.module.scss';

const ProductImages = ({ product }) => {
  const { imageUrls, brand } = product;
  const brands = useSelector(getBrandsSelector);
  const brandsLoading = useSelector(brandsLoadingSelector);
  const dispatch = useDispatch();

  const [galeryOpen, setGaleryOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [displayImage, setDisplayImage] = useState(0);

  useEffect(() => {
    dispatch(getBrandsOperation());
  }, []);

  let brandImage = '';

  if (!brandsLoading) {
    const brandProduct = brands.filter(br => br.name === brand);
    brandImage = brandProduct[0].imageUrl;
  }

  const modalHandler = () => {
    document.body.classList.toggle('lock');
    setGaleryOpen(!galeryOpen);
  };

  const imageList = imageUrls.map((image, index) => {
    return (
      <li key={index} className={`${styles.imageItem} ${index === displayImage ? styles.imageMinActive : ''}`}>
        <span
          onClick={() => {
            modalHandler();
            setActivePhoto(index);
          }}
          onMouseEnter={() => {
            setDisplayImage(index);
          }}
        >
          <img src={image.smallImage} className={styles.imageMin} alt='Product' />
        </span>
      </li>
    );
  });

  return (
    <>
      <div className={styles.container}>
        <div>
          <ul>{imageList}</ul>
        </div>
        <div className={styles.imageContainer}>
          <span
            onClick={() => {
              modalHandler();
              setActivePhoto(displayImage);
            }}
          >
            <ReactImageMagnify
              isActivatedOnTouch
              enlargedImageContainerDimensions={{ width: '140%', height: '100%' }}
              {...{
                smallImage: {
                  alt: 'Картинка продукта',
                  isFluidWidth: true,
                  src: imageUrls[displayImage].smallImage,
                },
                largeImage: {
                  src: imageUrls[displayImage].largeImage,
                  alt: 'Картинка продукта',
                  width: 1500,
                  height: 1500,
                },
              }}
            />
          </span>
          <div className={styles.brand}>
            {!brandsLoading && <img className={styles.brandImage} src={brandImage} alt={`Brand ${brand}`} />}
          </div>
        </div>
      </div>

      {galeryOpen && (
        <div className={styles.galeryContainer}>
          <ImageGalery buttonHandler={modalHandler} product={product} initialSlide={activePhoto} />
        </div>
      )}
    </>
  );
};

ProductImages.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductImages;
