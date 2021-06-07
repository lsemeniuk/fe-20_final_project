import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { getFiltersOperation } from '../../../../store/filter/operations';
import { updateFilter } from '../../../../http/filtersAPI';

const UpdateFiltersForm = ({ filter, setOpenForm }) => {
  const { name, cssValue, _id: id } = filter;

  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          type: name || '',
          name: cssValue || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateFilter(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(getFiltersOperation());
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='Тип фильтра' name='type' type='text' placeholder='Название ТИПА фильтра' tabIndex='0' />
            <MyTextInput label='Имя фильтра' name='name' type='text' placeholder='Значение цвета' tabIndex='0' />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
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
