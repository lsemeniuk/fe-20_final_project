/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addBrand } from '../../../../http/brandsAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';

const AddBrandsForm = () => {
  const [messageServer, setmessageServer] = useState(null);

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
                setmessageServer(<span style={{ color: 'green' }}>Бренд успешно добавлен!</span>);
              }
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='Название' name='name' type='text' placeholder='apple' tabIndex='0' />
            <MyTextInput
              label='Картинка'
              name='imageUrl'
              type='text'
              placeholder='https://smart-electronix.com/1.png'
              tabIndex='0'
            />
            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddBrandsForm;
