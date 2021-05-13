/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addCategory } from '../../../../http/catalogAPI';
import schema from '../schema';
import CatalogInputs from '../CatalogInputs/CatalogInputs';

const AddCategoryForm = () => {
  const [messageServer, setmessageServer] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          id: '',
          name: '',
          parentId: 'null',
          imageUrl: '',
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
        <Form>
          <CatalogInputs />
          <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
        </Form>
      </Formik>
    </>
  );
};

export default AddCategoryForm;
