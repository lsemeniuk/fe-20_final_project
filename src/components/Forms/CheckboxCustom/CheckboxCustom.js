import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import styles from './CheckboxCustom.module.scss';
import { getProductsFilterSelector } from '../../../store/products/selectors';

const CheckboxCustom = ({ labelTitle, id, name, value, filterProduct, romoveFilterProduct }) => {
  const productFilters = useSelector(getProductsFilterSelector);

  const { search } = useLocation();

  const addFilters = () => {
    if (search.includes(name)) {
      const filterValue = productFilters[name];
      filterValue.push(value);

      filterProduct({ [name]: filterValue });
    } else {
      filterProduct({ [name]: [value] });
    }
  };

  return (
    <div>
      <input
        type='checkbox'
        className={styles.checkbox}
        id={id}
        name={name}
        value={value}
        onChange={e => (e.target.checked ? addFilters() : romoveFilterProduct(name))}
      />
      <label htmlFor={id}>{labelTitle}</label>
    </div>
  );
};

CheckboxCustom.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  filterProduct: PropTypes.func.isRequired,
  romoveFilterProduct: PropTypes.func.isRequired,
};

export default CheckboxCustom;
