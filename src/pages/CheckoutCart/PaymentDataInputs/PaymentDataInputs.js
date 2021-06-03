import React from 'react';
import MySelect from '../../../components/Forms/MySelect/MySelect';

const PaymentDataInputs = () => {
  return (
    <div>
      <h3 className='checkout__title'>Оплата</h3>
      <MySelect label='Способ оплаты' name='payment'>
        <option>Выберите способ оплаты</option>
        <option value='Наличными'>Наличными</option>
        <option value='Оплата при получении'>Оплата при получении</option>
      </MySelect>
      <hr />
    </div>
  );
};

export default PaymentDataInputs;
