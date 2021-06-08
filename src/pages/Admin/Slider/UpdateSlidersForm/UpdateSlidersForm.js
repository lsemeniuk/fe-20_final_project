import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { getFiltersOperation } from '../../../../store/filter/operations';
import { updateSlide } from '../../../../http/slidesAPI';

const UpdateSlidersForm = ({ filter, setOpenForm }) => {
  const { title, imageUrl, description, product, _id: id } = filter;
  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();

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
          updateSlide(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              //dispatch(getFiltersOperation());
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
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
            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateSlidersForm.propTypes = {
  filter: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateSlidersForm;
