import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { createNewFilter } from '../../../../http/filtersAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { popupOpenOperation } from '../../../../store/modal/operations';

const AddFiltersForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          type: '',
          name: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          createNewFilter(values)
            .then(res => {
              if (res.status === 200) {
                dispatch(popupOpenOperation('Тип фильтра успешно добавлен!'));
              }
            })
            .catch(err => {
              const message = Object.values(err.data).join('');
              dispatch(popupOpenOperation(message, true));
            });
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='Тип фильтра' name='type' type='text' placeholder='Тип фильтра' tabIndex='0' />
            <MyTextInput label='Имя фильтра' name='name' type='text' placeholder='Имя фильтра' tabIndex='0' />
            <ButtonBlock buttonTitle='Сохранить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddFiltersForm;
