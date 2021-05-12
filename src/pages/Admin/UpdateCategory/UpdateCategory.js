/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';

const UpdateCategory = () => {
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
          id: Yup.string().min(3, 'Мин. 3 буквы').max(15, 'Макс. 15 букв').required('Укажите id-слово для категории'),
          name: Yup.string().min(3, 'Мин. 3 буквы').max(15, 'Макс. 15 букв').required('Укажите название категории'),
          parentId: Yup.string()
            .min(3, 'Мин. 3 буквы')
            .max(15, 'Макс. 15 букв')
            .required('Название Родительской категории либо null'),
          imageUrl: Yup.string(),
          description: Yup.string().max(50, 'Макс. 50 букв').required('Краткое описание категории'),
          level: Yup.number().required('Уровень вложенности: по умолчанию - 0 (самый верх)'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const updateCategory = {};
          for (const key in values) {
            if (values[key] !== '') {
              updateCategory[key] = values[key];
            }
          }

          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='ID категории' name='id' type='text' placeholder='введите id-слово' tabIndex='0' />
          <MyTextInput label='Название' name='name' type='text' placeholder='изменить название' tabIndex='0' />
          <MyTextInput label='Родит.категория' name='parentId' type='text' placeholder='изменить родит.' tabIndex='0' />
          <MyTextInput label='Картинка' name='imageUrl' type='text' placeholder='ccылка на изображение' tabIndex='0' />
          <MyTextInput label='Описание' name='description' type='text' placeholder='изменить описание' tabIndex='0' />
          <MyTextInput label='Уровень' name='level' type='number' placeholder='Изменить вложенность' tabIndex='0' />
          <ButtonBlock buttonTitle='Сохранить' />
        </Form>
      </Formik>
    </>
  );
};

export default UpdateCategory;
