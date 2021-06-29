import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { updateBrand } from '../../../../http/brandsAPI';
import { getBrandsOperation } from '../../../../store/brands/operations';
import schema from '../schema';
import { popupOpenOperation } from '../../../../store/modal/operations';
import { getImageAffiliation } from '../../../../http/imagesAPI';

const UpdateBrandsForm = ({ brand, setOpenForm }) => {
  const { name, imageUrl, _id: id } = brand;

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
          name: name || '',
          imageUrl: imageUrl || '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateBrand(id, values)
            .then(res => {
              if (res.status === 200) {
                setOpenForm(false);
              }
              dispatch(popupOpenOperation('Бренд успешно изменён!'));
              dispatch(getBrandsOperation());
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
            <ButtonBlock buttonTitle='Изменить' />
          </Form>
        </div>
      </Formik>
    </>
  );
};

UpdateBrandsForm.propTypes = {
  brand: PropTypes.object.isRequired,
  setOpenForm: PropTypes.func.isRequired,
};

export default UpdateBrandsForm;
