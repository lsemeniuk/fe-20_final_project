import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите ФИО'),
  phone: yup.string().required('Укажите номер телефона'),
  city: yup.string().max(60, 'Макс. 60 букв').required('Укажите город'),
  email: yup.string().min(0, ''),
  delivery: yup.string().max(60, 'Макс. 60 букв'),
  payment: yup.string().max(60, 'Макс. 60 букв'),
  comment: yup.string().max(400, 'Макс. 400 букв'),
});

export default schema;
