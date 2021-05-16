/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import schema from '../schema';
import CatalogInputs from '../CatalogInputs/CatalogInputs';
import { addCategory } from '../../../../http/catalogAPI';

const AddCategory = () => {
  const [messageServer, setmessageServer] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          id: '',
          name: '',
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
                setmessageServer(<span style={{ color: 'green' }}>Категория успешно добавлена!</span>);
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
            <CatalogInputs isAdd />
            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddCategory;
