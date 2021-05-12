/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';

const DeleteCategory = () => {
  return (
    <>
      <Formik
        initialValues={{
          id: '',
        }}
        validationSchema={Yup.object({
          id: Yup.string().min(3, 'Мин. 3 буквы').max(15, 'Макс. 15 букв').required('Укажите id-слово для категории'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const deleteCategory = {};
          for (const key in values) {
            if (values[key] !== '') {
              deleteCategory[key] = values[key];
            }
          }

          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label=' Удалить категорию' name='id' type='text' placeholder='введите ID' tabIndex='0' />
          <ButtonBlock buttonTitle='Сохранить' />
        </Form>
      </Formik>
    </>
  );
};

export default DeleteCategory;
