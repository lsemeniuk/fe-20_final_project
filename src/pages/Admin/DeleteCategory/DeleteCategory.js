/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';
import { deleteCategoryRequest } from '../../../http/catalogAPI';

const DeleteCategory = () => {
  const [messageServer, setmessageServer] = useState(null);
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
          deleteCategoryRequest(values.id)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Категория успешно удалена!</span>);
              }
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label=' Удалить категорию' name='id' type='text' placeholder='введите ID' tabIndex='0' />
          <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default DeleteCategory;
