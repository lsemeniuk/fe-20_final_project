/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';
import schema from '../schema';
import { updateCategory } from '../../../http/catalogAPI';

const UpdateCategoryForm = () => {
  const [messageServer, setmessageServer] = useState(null);
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
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const updatedCategory = {};
          for (const key in values) {
            if (values[key] !== '') {
              updatedCategory[key] = values[key];
            }
          }
          updateCategory(values.id, updatedCategory)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Категория успешно изменена!</span>);
              }
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
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
          <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default UpdateCategoryForm;
