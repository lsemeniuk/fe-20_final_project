import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../../components/Loader/Loader';
import { getColorsOperation } from '../../../../store/colors/operations';
import { colorsLoadingSelector, getColorsSelector } from '../../../../store/colors/selectors';
import ColorsItem from '../ColorsItem/ColorsItem';

const ColorsList = () => {
  const dispatch = useDispatch();
  const colors = useSelector(getColorsSelector);
  const colorsLoading = useSelector(colorsLoadingSelector);
  useEffect(() => {
    dispatch(getColorsOperation);
  }, []);

  if (colorsLoading) {
    return <Loader />;
  }

  const colorsList = colors.map(color => {
    return (
      <li key={color.name} style={{ padding: '10px' }}>
        <ColorsItem color={color} />
      </li>
    );
  });

  return <ul>{colorsList}</ul>;
};

export default ColorsList;
