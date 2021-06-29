import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addColor } from '../../../../http/colorsAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { popupOpenOperation } from '../../../../store/modal/operations';

const AddColorsForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          cssValue: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addColor(values)
            .then(res => {
              if (res.status === 200) {
                dispatch(popupOpenOperation('Цвет успешно добавлен!'));
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
            <MyTextInput label='Название' name='name' type='text' placeholder='Название цвета' tabIndex='0' />
            <MyTextInput label='HEX цвет' name='cssValue' type='text' placeholder='Значение цвета' tabIndex='0' />
            <ButtonBlock buttonTitle='Сохранить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddColorsForm;
