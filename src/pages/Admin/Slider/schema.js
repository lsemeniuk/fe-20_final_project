import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите заголовок слайдера'),
  imageUrl: yup.string(),
  description: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите описание слайдера'),
  product: yup.string(),
});

export default schema;
