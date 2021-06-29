import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import { addBrand } from '../../../../http/brandsAPI';
import schema from '../schema';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { popupOpenOperation } from '../../../../store/modal/operations';
import { getImageAffiliation } from '../../../../http/imagesAPI';

const AddBrandsForm = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);
  const [imagesloading, setImagesLoading] = useState(true);

  const filters = { affiliation: 'brands' };

  useEffect(() => {
    getImageAffiliation(filters).then(res => {
      setImages(res.data.images);
      setImagesLoading(false);
    });
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          imageUrl: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          addBrand(values)
            .then(res => {
              if (res.status === 200) {
                dispatch(popupOpenOperation('Бренд успешно добавлен!'));
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
            <MyTextInput label='Название' name='name' type='text' placeholder='Название бренда' tabIndex='0' />
            {!imagesloading && (
              <MySelect label='Картинка' name='imageUrl' tabIndex='0'>
                <option>Выберите картинку</option>
                {images.map(image => {
                  return (
                    <option key={image.name} value={image.imageUrl}>
                      {image.name}
                    </option>
                  );
                })}
              </MySelect>
            )}
            <ButtonBlock buttonTitle='Сохранить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddBrandsForm;
