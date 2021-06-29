import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { updateComment } from '../../../../http/commentAPI';
import { popupOpenOperation } from '../../../../store/modal/operations';

const UpdateCommentsForm = ({ comment, setOpenForm, setRefreshComments }) => {
  const { content, _id: id } = comment;

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          content: content || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateComment(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
                setRefreshComments(true);
              }
              dispatch(popupOpenOperation('Комментарий успешно изменён!'));
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
            {/* <MyTextInput label='Продукт' name='product' type='text' placeholder='Продукт' tabIndex='0' /> */}
            <MyTextInput
              label='Комментарий'
              name='content'
              type='text'
              placeholder='Комментарий к продукту'
              tabIndex='0'
            />
            <ButtonBlock buttonTitle='Изменить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateCommentsForm.propTypes = {
  comment: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
  setRefreshComments: PropTypes.func.isRequired,
};

export default UpdateCommentsForm;
