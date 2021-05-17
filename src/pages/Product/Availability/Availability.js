import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../../components/Icons/Icons';
import styles from './Availability.module.scss';

const Availability = ({ quantity }) => {
  let availability = null;

  if (quantity >= 10) {
    availability = (
      <>
        <Icons color='#38af20' type='okay' width={20} height={20} className={styles.availabilityIcons} />
        <span className={styles.inStock}>Есть в наличии</span>
      </>
    );
  } else if (quantity <= 0) {
    availability = (
      <>
        <Icons color='#797878' type='no' width={20} height={20} className={styles.availabilityIcons} />
        <span className={styles.noProduct}>Нет в наличии</span>
      </>
    );
  } else {
    availability = (
      <>
        <Icons color='#ff5c00' type='clock' width={20} height={20} className={styles.availabilityIcons} />
        <span className={styles.ends}>Товар заканчиваеться</span>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.availabilityRow}>{availability}</div>
    </div>
  );
};

Availability.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Availability;
