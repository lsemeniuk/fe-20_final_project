/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';

import schema from '../schema';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import { getCategoriesSelector } from '../../../../store/catalog/selectors';
import { addCategory } from '../../../../http/catalogAPI';

const AddCategory = () => {
  const [messageServer, setmessageServer] = useState(null);
  const categories = useSelector(getCategoriesSelector);

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
          addCategory(values)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Категория успешно добавлена!</span>);
              }
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label='ID категории' name='id' type='text' placeholder='введите ID категории' tabIndex='0' />
          <MyTextInput label='Название' name='name' type='text' placeholder='Название категории' tabIndex='0' />
          <MySelect label='Родит. категория' name='parentId' tabIndex='0'>
            <option value='null'>Без родительськой категории</option>
            {categories.map(categorie => {
              return (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.name} ({categorie.level})
                </option>
              );
            })}
          </MySelect>
          <MyTextInput label='URL картинки' name='imageUrl' type='text' placeholder='URL картинки' tabIndex='0' />
          <MyTextInput label='Описание' name='description' type='text' placeholder='Описание категории' tabIndex='0' />
          <MyTextInput label='Уровень' name='level' type='number' placeholder='Уровень вложенности' tabIndex='0' />
          <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default AddCategory;
