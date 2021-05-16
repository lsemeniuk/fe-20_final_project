/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { updateCategory } from '../../../../http/catalogAPI';
import schema from '../schema';
import CatalogInputs from '../CatalogInputs/CatalogInputs';
import { getCatalogOperation } from '../../../../store/catalog/operations';

const UpdateCategoryForm = ({ category, setOpenForm }) => {
  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          id: category.id || '',
          name: category.name || '',
          parentId: category.parentId || 'null',
          imgUrl: category.imgUrl || '',
          description: category.description || '',
          level: category.level || 0,
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateCategory(values.id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(getCatalogOperation());
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <CatalogInputs />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateCategoryForm.propTypes = {
  category: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateCategoryForm;
