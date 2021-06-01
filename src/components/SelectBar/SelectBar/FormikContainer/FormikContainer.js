import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import FormikControl from '../FormikControl/FormikControl';
import {
  // checkedFiltersOperation,
  getFiltersOperation,
  saveFiltersOperation,
} from '../../../../store/filter/operations';
import { getFiltersSelector } from '../../../../store/filter/selectors';
import Loader from '../../../Loader/Loader';
import Button from '../../../Button/Button';
import SliderRadre from '../../SliderRadre/SliderRadre';
import styles from './FormikContainer.module.scss';

/* eslint no-console: ["error", { allow: ["warn"] }] */
function FormikContainer({ classes, checkboxed }) {
  const dispatch = useDispatch();
  const [min] = useState(0);
  const [max] = useState(400000);
  const [downPrice, setDownPrice] = useState(min);
  const [upPrice, setUpPrice] = useState(max);

  const filters = useSelector(getFiltersSelector);

  useEffect(() => {
    dispatch(getFiltersOperation());
  }, [dispatch]);

  if (filters === undefined) {
    return <Loader />;
  }

  // const onSubmit = values => {
  //   dispatch(checkedFiltersOperation(values));
  //   // setSubmitting(false);
  // };

  return (
    <>
      {!!checkboxed && (
        <Formik
          initialValues={{
            hot: [],
            currentPrice: [],
            categories: [],
            brand: [],
            stock: [],
          }}
          validationSchema={Yup.object({
            hot: Yup.array().required('Required'),
            currentPrice: Yup.array().required('Required'),
            categories: Yup.array().required('Required'),
            brand: Yup.array().required('Required'),
            stock: Yup.array().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            /* eslint no-console: 0 */
            console.log(values);
            dispatch(saveFiltersOperation(values));
            // dispatch(checkedFiltersOperation(values));

            setSubmitting(false);
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
                      name='hot'
                      nameCur='hot'
                      options={filters}
                    />
                    <SliderRadre
                      label='Цена, грн'
                      name='currentPrice'
                      min={+min}
                      max={+max}
                      downPrice={+downPrice}
                      setDownPrice={setDownPrice}
                      upPrice={+upPrice}
                      setUpPrice={setUpPrice}
                    />
                    {/* <CategoriesList className={styles.link} /> */}
                    <FormikControl
                      control='checkbox'
                      label='Категории'
                      name='categories'
                      nameCur='categories'
                      options={filters}
                    />
                    <FormikControl control='checkbox' label='Бренд' name='brand' nameCur='brand' options={filters} />
                    <FormikControl control='checkbox' label='Наличие' name='stock' nameCur='stock' options={filters} />
                    <Button title='Применить' type='submit' className={styles.select_btn} />
                  </div>
                </Form>
              </div>
            </section>
          )}
        </Formik>
      )}
      {/* {!!sort && (
        <Formik
          initialValues={{
            selected: '',
          }}
          validationSchema={Yup.object({
            selected: Yup.string().required('Required'),
          })}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className={classes}>
              <div className={styles.select_box_sort}>
                {/* <div> */}
      {/* <h4 className={styles.select_heading}>Сортировка:</h4>
                <FormikControl control='select' label='sort' name='selected' options={filters} onChange={onSubmit} />
                {/* </div> */}
      {/* </div>
              <Button title='Применить' type='submit' className={styles.select_btn} />
            </Form>
          )}
          // </Formik> */}
      {/* // )} */}
    </>
  );
}

FormikContainer.propTypes = {
  checkboxed: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
};

export default FormikContainer;
