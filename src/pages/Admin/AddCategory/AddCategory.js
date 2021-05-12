/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';
import { addCategoryRequest } from '../../../http/catalogAPI';

const AddCategory = () => {
  const [messageServer, setmessageServer] = useState(null);

  // TODO: 1) требует проверку на авторизацию.  useEffect(() => {
  // todo dispatch(checkAdminOperation());
  // todo }, []);

  //! также пишет что err.data - >undefined
  return (
    <>
      <Formik
        initialValues={{
          id: '',
          name: '',
          parentId: 'null',
          imageUrl: '',
          description: '',
          level: 0,
        }}
        validationSchema={Yup.object({
          id: Yup.string().min(3, 'Мин. 3 буквы').max(30, 'Макс. 30 букв').required('Укажите id-слово для категории'),
          name: Yup.string().min(3, 'Мин. 3 буквы').max(30, 'Макс. 30 букв').required('Укажите название категории'),
          parentId: Yup.string()
            .min(3, 'Мин. 3 буквы')
            .max(30, 'Макс. 30 букв')
            .required('Название Родительской категории либо null'),
          imageUrl: Yup.string(),
          description: Yup.string().max(60, 'Макс. 60 букв').required('Краткое описание категории'),
          level: Yup.number().required('Уровень вложенности: по умолчанию - 0 (самый верх)'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const newCategory = {};
          for (const key in values) {
            if (values[key] !== '') {
              newCategory[key] = values[key];
            }
          }
          addCategoryRequest(newCategory)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Новая Категория успешно добавлена в каталог!</span>);
              }
            })
            .catch(err => {
              console.log(err.data);
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='ID категории' name='id' type='text' placeholder='введите id-слово' tabIndex='0' />
          <MyTextInput label='Название категории' name='name' type='text' placeholder='название' tabIndex='0' />
          <MyTextInput label='Родит.категория' name='parentId' type='text' placeholder='род.категория' tabIndex='0' />
          <MyTextInput label='Картинка' name='imageUrl' type='text' placeholder='ccылка на изображение' tabIndex='0' />
          <MyTextInput label='Описание' name='description' type='text' placeholder='опис.категории' tabIndex='0' />
          <MyTextInput label='Уровень' name='level' type='number' placeholder='Уровень вложенности' tabIndex='0' />
          <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default AddCategory;
