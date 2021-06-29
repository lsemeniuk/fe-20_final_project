import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { updateCategory } from '../../../../http/catalogAPI';
import schema from '../schema';
import CatalogInputs from '../CatalogInputs/CatalogInputs';
import { getCatalogOperation } from '../../../../store/catalog/operations';
import { popupOpenOperation } from '../../../../store/modal/operations';

const UpdateCategoryForm = ({ category, setOpenForm }) => {
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
              dispatch(popupOpenOperation('Категория успешно изменена!'));
              dispatch(getCatalogOperation());
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
            <CatalogInputs />
            <ButtonBlock buttonTitle='Изменить' />
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
