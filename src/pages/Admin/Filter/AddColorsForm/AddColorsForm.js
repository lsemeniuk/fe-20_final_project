/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addColor } from '../../../../http/colorsAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';

const AddColorsForm = () => {
  const [messageServer, setmessageServer] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          cssValue: '',
          date: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addColor(values)
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
            <MyTextInput label='Название' name='name' type='text' placeholder='Название цвета' tabIndex='0' />
            <MyTextInput label='Цвет' name='cssValue' type='text' placeholder='цвет' tabIndex='0' />
            <MyTextInput label='Дата' name='date' type='date' placeholder='дата' tabIndex='0' />
            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddColorsForm;
