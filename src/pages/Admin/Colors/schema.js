import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите название цвета'),
<<<<<<< HEAD
  imageUrl: yup.string(),
=======
  cssValue: yup
    .string()
    .min(4, 'Мин. 4 буквы')
    .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Введите значение формата #000000'),
>>>>>>> f90998696fe377bcef61758f6db83d931f9f5c5e
});

export default schema;
