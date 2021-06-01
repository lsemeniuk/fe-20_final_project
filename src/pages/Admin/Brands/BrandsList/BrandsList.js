import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../components/Loader/Loader';
import { getBrandsOperation } from '../../../../store/brands/operations';
import { brandsLoadingSelector, getBrandsSelector } from '../../../../store/brands/selectors';
import BrandsItem from '../BrandsItem/BrandsItem';

const BrandsList = () => {
  const dispatch = useDispatch();
  const brands = useSelector(getBrandsSelector);
  const brandsLoading = useSelector(brandsLoadingSelector);
  useEffect(() => {
    dispatch(getBrandsOperation());
  }, []);

  if (brandsLoading) {
    return <Loader />;
  }

  const brandsList = brands.map(brand => {
    return (
      <li key={brand.name} style={{ padding: '10px' }}>
        <BrandsItem brand={brand} />
      </li>
    );
  });

  return <ul>{brandsList}</ul>;
};

export default BrandsList;
