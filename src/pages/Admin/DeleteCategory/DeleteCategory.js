/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';
import { deleteCategoryRequest } from '../../../http/catalogAPI';
import schema from '../schema';

const DeleteCategory = () => {
  const [messageServer, setmessageServer] = useState(null);
  return (
    <>
      <Formik
        initialValues={{
          id: '',
        }}
        validationSchema={schema}
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
