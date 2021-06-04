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
  mobile: Yup.string()
    .min(13, 'Слишком маленький')
    .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Некоректный номер телефона'),
  email: Yup.string().email('Неверный адрес email').required('Укажите email'),
  region: Yup.string().min(3, 'Выберите область').max(40, 'Макс. 40 букв'),
  city: Yup.string().min(3, 'Выберите город').max(60, 'Макс. 60 букв').required('Укажите город'),
  delivery: Yup.string().min(3, 'Выберите способ доставки').max(40, 'Макс. 20 букв'),
  address: Yup.string(),
  paymentInfo: Yup.string().max(60, 'Макс. 60 букв'),
  comment: Yup.string().max(400, 'Макс. 400 букв'),
});

export default schema;