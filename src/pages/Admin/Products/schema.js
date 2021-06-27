import * as yup from 'yup';

const schema = yup.object().shape({
  categories: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв').required('Укажите категорию'),
  brand: yup.string().required('Выберите бренд'),
  name: yup.string().min(5, 'Мин. 5 букв').max(30, 'Макс. 30 букв').required('Укажите название товара'),
  currentPrice: yup.number().required('Укажите текущую цену'),
  previousPrice: yup.number().required('Укажите предыдущую цену'),
  imageUrls: yup.string().required('Выберите фотографии'),
  quantity: yup.number().required('Укажите количество'),
  color: yup.string().required('Выберите цвет'),
  productUrl: yup.string().required('Укажите url продукта'),
  superPrise: yup.string(),
  isNew: yup.string(),
  isHit: yup.string(),
  description: yup.string().min(10, 'Мин. 10 буквы').required('Описание в формате html'),
  characteristics: yup.array().required(),
});

export default schema;
