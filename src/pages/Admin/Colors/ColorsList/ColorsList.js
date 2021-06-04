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
<<<<<<< HEAD
  useEffect(() => {
    dispatch(getColorsOperation);
=======

  useEffect(() => {
    dispatch(getColorsOperation());
>>>>>>> f90998696fe377bcef61758f6db83d931f9f5c5e
  }, []);

  if (colorsLoading) {
    return <Loader />;
  }

<<<<<<< HEAD
  const colorsList = colors.map(color => {
=======
  const colorList = colors.map(color => {
>>>>>>> f90998696fe377bcef61758f6db83d931f9f5c5e
    return (
      <li key={color.name} style={{ padding: '10px' }}>
        <ColorsItem color={color} />
      </li>
    );
  });

<<<<<<< HEAD
  return <ul>{colorsList}</ul>;
=======
  return <ul>{colorList}</ul>;
>>>>>>> f90998696fe377bcef61758f6db83d931f9f5c5e
};

export default ColorsList;
