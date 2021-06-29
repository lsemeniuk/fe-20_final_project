import * as yup from 'yup';

const schema = yup.object().shape({
  // product: yup.string().min(2, 'Мин. 2 буквы').max(100, 'Макс. 100 букв').required('Укажите название'),
  content: yup.string().min(2, 'Мин. 2 буквы').max(100, 'Макс. 100 букв').required('Укажите новый комментарий'),
});

export default schema;
