import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите название цвета'),
  cssValue: yup
    .string()
    .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Введите значение формата #000000')
    .required('Укажите значение цвета'),
});

export default schema;
