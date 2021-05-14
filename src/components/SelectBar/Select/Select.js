import React, { useState } from 'react';
import MyFilterContainer from '../SelectBar/MyFilterContainer/MyFilterContainer';
/**
 * Чтобы отобразить фильтр на странице используй этот компонент
 *
 *  */

const Select = () => {
  const [sort] = useState(true);
  const [checkboxed] = useState(true);

  return (
    <>
      <MyFilterContainer sort={sort} checkboxed={!checkboxed} />
      <MyFilterContainer sort={!sort} checkboxed={checkboxed} />
    </>
  );
};

export default Select;
