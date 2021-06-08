import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addSlide } from '../../../../http/slidesAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';

const AddSlidersForm = () => {
  const [messageServer, setmessageServer] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          imageUrl: '',
          description: '',
          product: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addSlide(values)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Слайдер успешно добавлен!</span>);
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
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddSlidersForm;
