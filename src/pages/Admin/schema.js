import * as yup from 'yup';

const schema = yup.object().shape({
  id: yup.string().min(3, 'Мин. 3 буквы').max(30, 'Макс. 30 букв').required('Укажите id-слово для категории'),
  name: yup.string().min(3, 'Мин. 3 буквы').max(30, 'Макс. 30 букв').required('Укажите название категории'),
  parentId: yup
    .string()
    .min(3, 'Мин. 3 буквы')
    .max(30, 'Макс. 30 букв')
    .required('Название Родительской категории либо null'),
  imageUrl: yup.string(),
  description: yup.string().max(60, 'Макс. 60 букв').required('Краткое описание категории'),
  level: yup.number().required('Уровень вложенности: по умолчанию - 0 (самый верх)'),
});

export default schema;
