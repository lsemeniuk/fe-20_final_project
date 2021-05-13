/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Redirect } from 'react-router';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import ButtonBlock from '../../../components/Forms/ButtonBlock/ButtonBlock';
import schema from '../schema';
import { checkAuthOperation } from '../../../store/customer/operations';
import Loader from '../../../components/Loader/Loader';
import { getCustomerIsLoadingSelector, getCustomerSelector } from '../../../store/customer/selectors';
import { addCategory } from '../../../http/catalogAPI';

const AddCategoryForm = () => {
  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();
  const customer = useSelector(getCustomerSelector);
  const customerLoading = useSelector(getCustomerIsLoadingSelector);

  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);
  if (customerLoading) {
    return <Loader />;
  }
  if (!customer.isAdmin) {
    return <Redirect to='/' />;
  }
  return (
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
        const newCategory = {};
        for (const key in values) {
          if (values[key] !== '') {
            newCategory[key] = values[key];
          }
        }

        addCategory(newCategory)
          .then(res => {
            if (res.status === 200) {
              setmessageServer(<span style={{ color: 'green' }}>Новая Категория успешно добавлена в каталог!</span>);
            }
          })
          .catch(err => {
            console.log(err.response);
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
  );
};

export default AddCategoryForm;
