import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import FormikControl from '../FormikControl/FormikControl';
import { getFiltersOperation, saveFiltersOperation } from '../../../../store/filter/operations';
import { getFiltersSelector } from '../../../../store/filter/selectors';
import { categoriesLoadingSelector, getCategoriesSelector } from '../../../../store/catalog/selectors';
import Loader from '../../../Loader/Loader';
import Button from '../../../Button/Button';
import SliderRadre from '../../SliderRadre/SliderRadre';
import styles from './FormikContainer.module.scss';

/* eslint no-console: ["error", { allow: ["warn"] }] */
function FormikContainer({ classes }) {
  const dispatch = useDispatch();
  const [min] = useState(0);
  const [max] = useState(50000);
  const [downPrice, setDownPrice] = useState(min);
  const [upPrice, setUpPrice] = useState(max);
  const categories = useSelector(getCategoriesSelector);
  const categoriesLoading = useSelector(categoriesLoadingSelector);
  const filters = useSelector(getFiltersSelector);

  useEffect(() => {
    dispatch(getFiltersOperation());
  }, [dispatch]);

  if (filters === undefined) {
    return <Loader />;
  }
  if (categoriesLoading) {
    return <Loader />;
  }

  return (
    <>
      <Formik
        initialValues={{
          isHit: [],
          isNew: [],
          currentPrice: { minPrice: [], maxPrice: [] },
          // minPrice: [],
          // maxPrice: [],
          categories: [],
          brand: [],
          quantity: [],
        }}
        validationSchema={Yup.object({
          isHit: Yup.array().required('Required'),
          isNew: Yup.array().required('Required'),
          currentPrice: Yup.object().required('Required'),
          // minPrice: Yup.array().required('Required'),
          // maxPrice: Yup.array().required('Required'),
          categories: Yup.array().required('Required'),
          brand: Yup.array().required('Required'),
          quantity: Yup.array().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          /* eslint no-console: 0 */
          console.log(values);
          dispatch(saveFiltersOperation(values));
          setSubmitting(true);
        }}
      >
        {() => (
          <section className={styles.select_container_box}>
            <div className={styles.select_box}>
              <Form className={classes}>
                <div className={styles.select_box_filter}>
                  <h4 className={styles.select_heading}>Фильтр:</h4>
                  <FormikControl
                    control='checkbox'
                    label='Горячие товары'
                    name='isHit'
                    nameCur='isHit'
                    options={filters}
                  />
                  <FormikControl control='checkbox' label='null' name='isNew' nameCur='isNew' options={filters} />
                  <SliderRadre
                    label='Цена, грн'
                    name='currentPrice'
                    min={min}
                    max={max}
                    downPrice={downPrice}
                    setDownPrice={setDownPrice}
                    upPrice={upPrice}
                    setUpPrice={setUpPrice}
                  />
                  <FormikControl
                    control='checkbox'
                    label='Категории'
                    name='categories'
                    nameCur='categories'
                    options={categories}
                  />
                  <FormikControl control='checkbox' label='Бренд' name='brand' nameCur='brand' options={filters} />
                  <FormikControl
                    control='checkbox'
                    label='Наличие'
                    name='quantity'
                    nameCur='quantity'
                    options={filters}
                  />
                  <Button title='Применить' type='submit' className={styles.select_btn} />
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
}

FormikContainer.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default FormikContainer;
