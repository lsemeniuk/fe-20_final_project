import * as Yup from 'yup';

const schema = Yup.object().shape({
  region: Yup.string().min(3, 'Выберите область').max(40, 'Макс. 40 букв'),
  city: Yup.string().min(3, 'Выберите город').max(60, 'Макс. 60 букв').required('Укажите город'),
  delivery: Yup.string().min(3, 'Выберите способ доставки').max(40, 'Макс. 20 букв'),
  address: Yup.string(),
  paymentInfo: Yup.string().max(60, 'Макс. 60 букв'),
  comment: Yup.string().max(400, 'Макс. 400 букв'),
});

export default schema;
