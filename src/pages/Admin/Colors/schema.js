import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите название цвета'),
  imageUrl: yup.string(),
});

export default schema;
