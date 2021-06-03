import React from 'react';
import MySelect from '../../../components/Forms/MySelect/MySelect';

const PaymentDataInputs = () => {
  return (
    <div>
      <h3 className='checkout__title'>Оплата</h3>
      <MySelect label='Способ оплаты' name='payment'>
        <option value='cash'>Наличными</option>
        <option value='cashOnDelivery'>Оплата при получении</option>
      </MySelect>
      <hr />
    </div>
  );
};

export default PaymentDataInputs;
