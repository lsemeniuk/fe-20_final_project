/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { updateImage } from '../../../../http/imagesAPI';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import { getCatalogOperation } from '../../../../store/catalog/operations';

const UpdateImagesForm = ({ image, setRefreshLoading }) => {
  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    affiliation: yup.string().min(2, 'Мин. 2 буквы').max(15, 'Макс. 15 букв').required('Укажите принадлежность'),
    product: yup.string().min(2, 'Мин. 2 буквы').max(30, 'Макс. 30 букв'),
    name: yup.string(),
    imageUrl: yup.string(),
  });

  return (
    <>
      <Formik
        initialValues={{
          affiliation: image.affiliation || '',
          product: image.product || '',
          name: image.name || '',
          imageUrl: image.imageUrl || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const { name, affiliation, product } = values;

          updateImage(name, { affiliation, product })
            .then(res => {
              if (res.status === 200) {
                setRefreshLoading();
              }
              dispatch(getCatalogOperation());
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MySelect label='Принадлежность' name='affiliation' type='text' placeholder='products' tabIndex='0'>
              <option value='products'>Товары</option>
              <option value='sliders'>Слайдер</option>
              <option value='brands'>Бренды</option>
              <option value='catalog'>Каталог</option>
            </MySelect>
            <MyTextInput label='Товар' name='product' type='text' placeholder='samsung_watch_35' tabIndex='0' />
            <MyTextInput
              disabled
              label='Ссылка на картинку'
              name='imageUrl'
              type='text'
              placeholder='samsung_watch_35'
              tabIndex='0'
            />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateImagesForm.propTypes = {
  image: PropTypes.object.isRequired,
  setRefreshLoading: PropTypes.func.isRequired,
};

export default UpdateImagesForm;
