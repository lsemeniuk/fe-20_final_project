import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { updateBrand } from '../../../../http/brandsAPI';
import { getBrandsOperation } from '../../../../store/brands/operations';
import schema from '../schema';

const UpdateProductsForm = ({ brand, setOpenForm }) => {
  const { name, imageUrl, _id: id } = brand;

  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: name || '',
          imageUrl: imageUrl || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateBrand(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(getBrandsOperation());
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='Название' name='name' type='text' placeholder='Название бренда' tabIndex='0' />
            <MyTextInput label='Картинка' name='imageUrl' type='text' placeholder='Картинка бренда' tabIndex='0' />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateProductsForm.propTypes = {
  brand: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateProductsForm;
