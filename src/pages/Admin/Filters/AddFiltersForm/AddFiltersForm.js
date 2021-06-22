import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { createNewFilter } from '../../../../http/filtersAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';

const AddFiltersForm = () => {
  const [messageServer, setmessageServer] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          type: '',
          name: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          createNewFilter(values)
            .then(res => {
              if (res.status === 200) {
                setmessageServer(<span style={{ color: 'green' }}>Тип фильтра успешно добавлен!</span>);
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
            <MyTextInput label='Тип фильтра' name='type' type='text' placeholder='displayResolution' tabIndex='0' />
            <MyTextInput label='Имя фильтра' name='name' type='text' placeholder='360х360' tabIndex='0' />
            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddFiltersForm;
