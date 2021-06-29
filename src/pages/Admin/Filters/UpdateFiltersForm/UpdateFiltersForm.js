import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { getFiltersOperation } from '../../../../store/filter/operations';
import { updateFilter } from '../../../../http/filtersAPI';
import { popupOpenOperation } from '../../../../store/modal/operations';

const UpdateFiltersForm = ({ filter, setOpenForm }) => {
  const { name, type, _id: id } = filter;

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          type: type || '',
          name: name || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateFilter(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(popupOpenOperation('Фильтр успешно изменён!'));
              dispatch(getFiltersOperation());
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
            <MyTextInput label='Тип фильтра' name='type' type='text' placeholder='displayResolution' tabIndex='0' />
            <MyTextInput label='Имя фильтра' name='name' type='text' placeholder='360х360' tabIndex='0' />
            <ButtonBlock buttonTitle='Изменить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateFiltersForm.propTypes = {
  filter: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateFiltersForm;
