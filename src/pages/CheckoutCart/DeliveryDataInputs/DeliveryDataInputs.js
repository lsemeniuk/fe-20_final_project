import React, { useState } from 'react';
import MySelect from '../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';

const DeliveryDataInputs = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('postDelivery');

  return (
    <div>
      <h3 className='checkout__title'>Доставка</h3>
      <MyTextInput
        label='Город доставки'
        name='city'
        type='text'
        placeholder='Введите название своего города'
        tabIndex='0'
      />

      <MySelect
        label='Способ доставки'
        name='delivery'
        onClick={e => {
          setDeliveryMethod(e.target.value);
        }}
        tabIndex='0'
      >
        <option>Выберите способ доставки</option>
        <option value='Новой почтой'>Новой почтой</option>
        <option value='Курьером по Киеву'>Курьером по Киеву</option>
      </MySelect>

      {deliveryMethod === 'Новой почтой' && (
        <MySelect label='Выберите адрес' name='address' tabIndex='0'>
          <option>Выберите адрес</option>
          <option value='Отделение № 1'>Отделение № 1</option>
          <option value='Отделение № 2'>Отделение № 2</option>
        </MySelect>
      )}
      {deliveryMethod === 'Курьером по Киеву' && (
        <MyTextInput label='Адрес' name='address' type='text' placeholder='Введите адрес доставки' tabIndex='-1' />
      )}
      <hr />
    </div>
  );
};

export default DeliveryDataInputs;
