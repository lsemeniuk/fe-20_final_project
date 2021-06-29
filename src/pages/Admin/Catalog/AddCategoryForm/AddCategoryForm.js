import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addCategory } from '../../../../http/catalogAPI';
import schema from '../schema';
import CatalogInputs from '../CatalogInputs/CatalogInputs';
import { popupOpenOperation } from '../../../../store/modal/operations';

const AddCategoryForm = () => {
  const dispatch = useDispatch();

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
                dispatch(popupOpenOperation('Категория успешно добавлена!'));
              }
            })
            .catch(err => {
              const message = Object.values(err.data).join('');
              dispatch(popupOpenOperation(message, true));
            });
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <CatalogInputs isAdd />
            <ButtonBlock buttonTitle='Сохранить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddCategoryForm;
