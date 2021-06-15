import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { brandsLoadingSelector, getBrandsSelector } from '../../store/brands/selectors';
import { getProductsFilterOperation } from '../../store/products/operations';
import { getProductsFilterSelector } from '../../store/products/selectors';
import CategoriesList from '../CategoriesList/CategoriesList';
import CheckboxCustom from '../Forms/CheckboxCustom/CheckboxCustom';
import styles from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const productFilters = useSelector(getProductsFilterSelector);
  const brands = useSelector(getBrandsSelector);
  const brandsLoading = useSelector(brandsLoadingSelector);

  const filterProduct = value => {
    dispatch(getProductsFilterOperation({ history, ...productFilters, ...value }));
  };

  const romoveFilterProduct = value => {
    const { [value]: remove, ...filters } = productFilters;
    dispatch(getProductsFilterOperation({ history, ...filters }));
  };

  let brandsList = null;
  if (!brandsLoading) {
    brandsList = brands.map(brand => {
      return (
        <li key={brand.name} className={styles.item}>
          <CheckboxCustom
            labelTitle={brand.name}
            id={brand.name}
            name='brand'
            value={brand.name}
            filterProduct={filterProduct}
            romoveFilterProduct={romoveFilterProduct}
          />
        </li>
      );
    });
  }

  return (
    <nav>
      <ul className={styles.container}>
        <CategoriesList
          classItem={styles.item}
          className={styles.categoriesLink}
          activeClassName={styles.categoriesLinkActive}
        />
      </ul>
      <ul className={styles.container}>
        <li className={styles.item}>
          <CheckboxCustom
            labelTitle='Новинки'
            id='isNew'
            name='isNew'
            value='yes'
            filterProduct={filterProduct}
            romoveFilterProduct={romoveFilterProduct}
          />
        </li>
        <li className={styles.item}>
          <CheckboxCustom
            labelTitle='Хит'
            id='isHit'
            name='isHit'
            value='yes'
            filterProduct={filterProduct}
            romoveFilterProduct={romoveFilterProduct}
          />
        </li>
        <li className={styles.item}>
          <CheckboxCustom
            labelTitle='Супер цена'
            id='superPrise'
            name='superPrise'
            value='yes'
            filterProduct={filterProduct}
            romoveFilterProduct={romoveFilterProduct}
          />
        </li>
      </ul>
      <ul className={styles.container}>{!brandsLoading && brandsList}</ul>
    </nav>
  );
};

export default Filter;
