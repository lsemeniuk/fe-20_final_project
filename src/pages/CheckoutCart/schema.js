import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Это слишком маленькое имя')
    .max(25, 'Неповерю что Вас так зовут')
    .required('Укажите Ваше имя'),
  lastName: Yup.string()
    .min(2, 'Извените, этого маловато для фамилии')
    .max(25, 'Возможно немного сократить?')
    .required('Укажите Вашу фамилию'),
  mobile: Yup.string().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, 'Некоректный номер телефона'),
  email: Yup.string().email('Неверный адрес email').required('Укажите email'),
  region: Yup.string().min(3, 'Выберите область').max(40, 'Макс. 40 букв').required('Укажите область'),
  city: Yup.string().min(3, 'Выберите город').max(60, 'Макс. 60 букв').required('Укажите город'),
  delivery: Yup.string()
    .min(3, 'Выберите способ доставки')
    .max(40, 'Макс. 20 букв')
    .required('Укажите способ доставки'),
  address: Yup.string().required('Укажите адрес'),
  paymentInfo: Yup.string().max(60, 'Макс. 60 букв').required('Укажите способ оплаты'),
  comment: Yup.string().max(400, 'Макс. 400 букв'),
});

export default schema;
