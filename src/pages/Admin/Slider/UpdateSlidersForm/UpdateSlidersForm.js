import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { updateSlide } from '../../../../http/slidesAPI';
import { popupOpenOperation } from '../../../../store/modal/operations';

const UpdateSlidersForm = ({ slider, setOpenForm, setRefreshSliders }) => {
  const dispatch = useDispatch();
  const { title, imageUrl, description, product, customId } = slider;

  return (
    <>
      <Formik
        initialValues={{
          title: title || '',
          imageUrl: imageUrl || '',
          description: description || '',
          product: product || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateSlide(customId, values)
            .then(res => {
              if (res.status === 200) {
                setRefreshSliders(true);
                setOpenForm(false);
                dispatch(popupOpenOperation('Слайдер удачно изменён!'));
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
            <MyTextInput
              label='Заголовок Слайдера'
              name='title'
              type='text'
              placeholder='Заголовок слайдера'
              tabIndex='0'
            />
            <MyTextInput label='Картинка' name='imageUrl' type='text' placeholder='Картинка слайдера' tabIndex='0' />
            <MyTextInput label='Описание' name='description' type='text' placeholder='Описание' tabIndex='0' />
            <MyTextInput label='Продукт' name='product' type='text' placeholder='Продукт' tabIndex='0' />
            <ButtonBlock buttonTitle='Изменить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateSlidersForm.propTypes = {
  slider: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
  setRefreshSliders: PropTypes.func.isRequired,
};

export default UpdateSlidersForm;
