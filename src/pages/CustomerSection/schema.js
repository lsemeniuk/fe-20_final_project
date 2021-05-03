import * as yup from 'yup';

const FIELD_REQUIRED = 'Это поле обязательное!';
const PHONE_REGEXP = /^((\+?3)?8)?0\d{9}$/;

const schema = yup.object().shape({
  fullName: yup.string().required(FIELD_REQUIRED).min(3, 'Полное имя слишком короткое))'),
  email: yup.string().email('Email недействительный').required(FIELD_REQUIRED),
  phone: yup.string().required(FIELD_REQUIRED).matches(PHONE_REGEXP, 'Неверный номер телефона'),
  city: yup.string().required(FIELD_REQUIRED),
  address: yup.string().required(FIELD_REQUIRED),
  password: yup.string().required(FIELD_REQUIRED).min(6, 'Минимальный размер пароля - 6 символов'),
  repeatPassword: yup
    .string()
    .required(FIELD_REQUIRED)
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export default schema;
