import * as yup from 'yup';

const schema = yup.object().shape({
  id: yup.string().min(2, 'Мин. 2 буквы').max(15, 'Макс. 15 букв').required('Укажите id категории'),
  name: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите название категории'),
  parentId: yup
    .string()
    .min(3, 'Мин. 3 буквы')
    .max(30, 'Макс. 30 букв')
    .required('Название Родительской категории либо null'),
  imageUrl: yup.string(),
  description: yup.string().max(60, 'Макс. 60 букв'),
  level: yup.number().min(0, 'Уровень не может быть меньше 0'),
});

export default schema;
