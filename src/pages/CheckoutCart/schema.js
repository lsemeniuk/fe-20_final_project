import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Это шликом маленькое имя')
    .max(25, 'Неповерю что Вас так зовут')
    .required('Укажите Ваше имя'),
  lastName: Yup.string()
    .min(2, 'Извените, этого маловато для фамилии')
    .max(25, 'Возможно немного сократить?')
    .required('Укажите Вашу фамилию'),
  mobile: Yup.string().required('Укажите номер телефона'),
  email: Yup.string().min(0, '').required('Укажите Ваше email'),
  city: Yup.string().max(60, 'Макс. 60 букв').required('Укажите город'),
  delivery: Yup.string().max(60, 'Макс. 60 букв'),
  address: Yup.string().max(60, 'Макс. 60 букв'),
  payment: Yup.string().max(60, 'Макс. 60 букв'),
  comment: Yup.string().max(400, 'Макс. 400 букв'),
});

export default schema;
