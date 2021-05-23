/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addCategory } from '../../../../http/catalogAPI';
import schema from './schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';

const AddCategoryForm = () => {
  const [messageServer, setmessageServer] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          parentId: 'null',
          imgUrl: '',
          description: '',
          level: 0,
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addCategory(values)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Заказ успешно оформлен!</span>);
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
            <MyTextInput />
            <ButtonBlock buttonTitle='Офромить заказ' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddCategoryForm;
