import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addSlide } from '../../../../http/slidesAPI';
import schema from '../schema';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import { getCategoriesSelector } from '../../../../store/catalog/selectors';

const AddSlidersForm = () => {
  const categories = useSelector(getCategoriesSelector);
  const [messageServer, setMessageServer] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          customId: '',
          title: '',
          imageUrl: '',
          description: '',
          category: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addSlide(values)
            .then(res => {
              if (res.status === 200) {
                setMessageServer(<span style={{ color: 'green' }}>Слайдер успешно добавлен!</span>);
              }
            })
            .catch(err => {
              setMessageServer(<span>{Object.values(err.data).join('')}</span>);
            });
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MyTextInput label='customId' name='customId' type='text' placeholder='customId' tabIndex='0' />
            <MyTextInput
              label='Заголовок Слайдера'
              name='title'
              type='text'
              placeholder='Заголовок слайдера'
              tabIndex='0'
            />
            <MyTextInput label='Картинка' name='imageUrl' type='text' placeholder='Картинка слайдера' tabIndex='0' />
            <MyTextInput label='Описание' name='description' type='text' placeholder='Описание' tabIndex='0' />
            <MySelect label='Категория' name='parentId' tabIndex='0'>
              <option value='null'>Категория</option>
              {categories.map(category => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.level})
                  </option>
                );
              })}
            </MySelect>
            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddSlidersForm;
