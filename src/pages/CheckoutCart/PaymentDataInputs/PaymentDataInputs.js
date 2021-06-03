import React from 'react';
import MySelect from '../../../components/Forms/MySelect/MySelect';

const PaymentDataInputs = () => {
  return (
    <div>
      <h3 className='checkout__title'>Оплата</h3>
      <MySelect label='Способ оплаты' name='paymentInfo'>
        <option>Выберите способ оплаты</option>
        <option value='Наличными'>Наличными</option>
        <option value='Наложенный платеж'>Наложенный платеж</option>
        <option value='Оплатить через Visa/Mastercard'>Оплатить через Visa/Mastercard</option>
      </MySelect>
      <hr />
    </div>
  );
};

export default PaymentDataInputs;
