import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addSlide } from '../../../../http/slidesAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import { getCategoriesSelector } from '../../../../store/catalog/selectors';
import { popupOpenOperation } from '../../../../store/modal/operations';

const AddSlidersForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);

  return (
    <>
      <Formik
        initialValues={{
          customId: '',
          imageUrl: '',
          title: '',
          description: '',
          backgroundColor: '',
          category: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addSlide(values)
            .then(res => {
              if (res.status === 200) {
                dispatch(popupOpenOperation('Бренд успешно добавлен!'));
              }
            })
            .catch(err => {
              const message = Object.values(err.data).join('');
              dispatch(popupOpenOperation(message, true));
            });
          resetForm({});
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='customId' name='customId' type='text' placeholder='customId' tabIndex='0' />
            <MyTextInput label='Картинка' name='imageUrl' type='text' placeholder='Картинка слайдера' tabIndex='0' />
            <MyTextInput
              label='Заголовок Слайдера'
              name='title'
              type='text'
              placeholder='Заголовок слайдера'
              tabIndex='0'
            />
            <MyTextInput label='Описание' name='description' type='text' placeholder='Описание' tabIndex='0' />
            <MyTextInput label='Цвет' name='backgroundColor' type='text' placeholder='Цвет' tabIndex='0' />
            <MySelect label='Категория' name='category' tabIndex='0'>
              <option value='null'>Категория</option>
              {categories.map(category => {
                const { _id: id, name, level } = category;
                return (
                  <option key={id} value={id}>
                    {name} {level}
                  </option>
                );
              })}
            </MySelect>
            <ButtonBlock buttonTitle='Сохранить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddSlidersForm;
