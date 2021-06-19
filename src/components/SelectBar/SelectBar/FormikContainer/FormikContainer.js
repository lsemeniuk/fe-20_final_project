import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import FormikControl from '../FormikControl/FormikControl';
import { getFiltersOperation, saveFiltersOperation } from '../../../../store/filter/operations';
import { getFiltersSelector } from '../../../../store/filter/selectors';
import { categoriesLoadingSelector } from '../../../../store/catalog/selectors';
import Loader from '../../../Loader/Loader';
import Button from '../../../Button/Button';
import SliderRadre from '../../SliderRadre/SliderRadre';
import { PRODUCTS_ROUTE } from '../../../../utils/consts';
import styles from './FormikContainer.module.scss';
import { getProductsFilterSelector } from '../../../../store/products/selectors';
import CategoriesList from '../../../CategoriesList/CategoriesList';
import { getBrandsSelector } from '../../../../store/brands/selectors';

/* eslint no-console: ["error", { allow: ["warn"] }] */
function FormikContainer({ classes }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [min] = useState(0);
  const [max] = useState(50000);
  const [downPrice, setDownPrice] = useState(min);
  const [upPrice, setUpPrice] = useState(max);
  const productFilters = useSelector(getProductsFilterSelector);
  const categoriesLoading = useSelector(categoriesLoadingSelector);
  const filters = useSelector(getFiltersSelector);
  const brands = useSelector(getBrandsSelector);

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
          brand: [],
          quantity: [],
        }}
        validationSchema={Yup.object({
          isHit: Yup.array().required('Required'),
          isNew: Yup.array().required('Required'),
          currentPrice: Yup.object().required('Required'),

          brand: Yup.array().required('Required'),
        })}
        onSubmit={(value, { setSubmitting }) => {
          /* eslint no-console: 0 */
          if (!history.location.pathname.includes('products')) {
            history.push(PRODUCTS_ROUTE);
          }
          dispatch(saveFiltersOperation({ history, productFilters, value }));
          setSubmitting(true);
        }}
      >
        {() => (
          <section className={styles.select_container_box}>
            <div className={styles.select_box}>
              <Form className={classes}>
                <div className={styles.select_box_filter}>
                  <h4 className={styles.select_heading}>Фильтр:</h4>
                  <ul className={styles.container}>
                    <CategoriesList
                      classItem={styles.item}
                      className={styles.categoriesLink}
                      activeClassName={styles.categoriesLinkActive}
                    />
                  </ul>
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
                  <FormikControl control='checkbox' label='Бренды' name='brand' nameCur='brand' options={brands} />

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
