import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import schema from '../schema';
import { updateComment } from '../../../../http/commentAPI';
import { getCommentsOperation } from '../../../../store/colors/operations';

const UpdateCommentsForm = ({ comment, setOpenForm }) => {
  const { product, content, _id: id } = comment;

  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          product: product || '',
          content: content || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateComment(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(getCommentsOperation());
            })
            .catch(err => {
              setmessageServer(<span>{Object.values(err.data).join('')}</span>);
            });

          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='Продукт' name='product' type='text' placeholder='Продукт' tabIndex='0' />
            <MyTextInput
              label='Комментарий'
              name='content'
              type='text'
              placeholder='Комментарий к продукту'
              tabIndex='0'
            />
            <ButtonBlock buttonTitle='Изменить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateCommentsForm.propTypes = {
  comment: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateCommentsForm;
