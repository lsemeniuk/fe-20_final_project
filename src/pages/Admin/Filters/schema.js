import * as yup from 'yup';

const schema = yup.object().shape({
  type: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите тип фильтра'),
  name: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите название фильтра'),
});

export default schema;
