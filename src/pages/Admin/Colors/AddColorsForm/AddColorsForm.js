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
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addColor(values)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Цвет успешно добавлен!</span>);
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
            <MyTextInput label='HEX цвет' name='cssValue' type='text' placeholder='Значение цвета' tabIndex='0' />
            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddColorsForm;
