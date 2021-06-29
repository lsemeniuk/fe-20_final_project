import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addBrand } from '../../../../http/brandsAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { popupOpenOperation } from '../../../../store/modal/operations';

const AddBrandsForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          imageUrl: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addBrand(values)
            .then(res => {
              if (res.status === 200) {
                dispatch(popupOpenOperation('Бренд успешно добавлен!'));
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
            <MyTextInput label='Название' name='name' type='text' placeholder='Название бренда' tabIndex='0' />
            <MyTextInput label='Картинка' name='imageUrl' type='text' placeholder='Картинка бренда' tabIndex='0' />
            <ButtonBlock buttonTitle='Сохранить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddBrandsForm;
