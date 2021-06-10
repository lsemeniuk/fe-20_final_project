import React from 'react';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';

const CustomerDataInputs = () => {
  return (
    <div>
      <h3 className='checkout__title'>Данные заказчика</h3>
      <MyTextInput label='Имя' name='firstName' type='text' placeholder='Введите имя' tabIndex='0' />
      <MyTextInput label='Фамилия' name='lastName' type='text' placeholder='Введите фамилию' tabIndex='0' />
      <MyTextInput label='Телефон' name='mobile' type='tel' placeholder='Введите номер телефона' tabIndex='0' />
      <MyTextInput label='Эл. почта' name='email' type='email' placeholder='Введите email' tabIndex='0' />
      <hr />
    </div>
  );
};

export default CustomerDataInputs;
