import React, { useState } from 'react';
import MyFilterContainer from '../SelectBar/MyFilterContainer/MyFilterContainer';
/**
 * Чтобы отобразить фильтр на странице используй этот компонент
 *
 *  */

const Select = () => {
  const [checkboxed] = useState(true);

  return (
    <>
      <MyFilterContainer checkboxed={checkboxed} />
    </>
  );
};

export default Select;
