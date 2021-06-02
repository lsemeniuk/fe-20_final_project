import React, { useState } from 'react';
import MySelect from '../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';

const DeliveryDataInputs = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('postDelivery');

  return (
    <div>
      <h3 className='checkout__title'>Доставка</h3>
      <MyTextInput
        id='city'
        label='Город'
        name='city'
        type='text'
        placeholder='Введите название своего города'
        tabIndex='0'
      />

      <MySelect
        label='Способ доставки'
        name='delivery'
        id='delivery'
        onClick={e => {
          setDeliveryMethod(e.target.value);
        }}
        tabIndex='0'
      >
        <option value='postDelivery'>Новой почтой</option>
        <option value='courierDelivery'>Курьером по Киеву</option>
      </MySelect>

      {deliveryMethod === 'postDelivery' && (
        <MySelect label='Склад' name='postom' tabIndex='0'>
          <option value='Отделение № 1'>Отделение № 1</option>
          <option value='Отделение № 2'>Отделение № 2</option>
        </MySelect>
      )}
      {deliveryMethod === 'courierDelivery' && (
        <MyTextInput label='Адрес' name='address' type='text' placeholder='Введите адрес доставки' tabIndex='-1' />
      )}
      <hr />
    </div>
  );
};

export default DeliveryDataInputs;
