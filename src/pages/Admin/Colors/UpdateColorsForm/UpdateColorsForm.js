import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { updateColor } from '../../../../http/colorsAPI';
import { getColorsOperation } from '../../../../store/colors/operations';
import { popupOpenOperation } from '../../../../store/modal/operations';

const UpdateColorsForm = ({ color, setOpenForm }) => {
  const { name, cssValue, _id: id } = color;
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          name: name || '',
          cssValue: cssValue || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateColor(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(popupOpenOperation('Цвет успешно изменён!'));
              dispatch(getColorsOperation());
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
            <MyTextInput label='Название' name='name' type='text' placeholder='Название цвета' tabIndex='0' />
            <MyTextInput label='HEX цвет' name='cssValue' type='text' placeholder='Значение цвета' tabIndex='0' />
            <ButtonBlock buttonTitle='Изменить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateColorsForm.propTypes = {
  color: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateColorsForm;
