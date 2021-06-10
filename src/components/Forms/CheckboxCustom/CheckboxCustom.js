import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckboxCustom.module.scss';

const CheckboxCustom = ({ labelTitle, id, name, value, filterProduct, romoveFilterProduct }) => {
  return (
    <div>
      <input
        type='checkbox'
        className={styles.checkbox}
        id={id}
        name={name}
        value={value}
        onChange={e => (e.target.checked ? filterProduct({ [name]: value }) : romoveFilterProduct(name))}
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
