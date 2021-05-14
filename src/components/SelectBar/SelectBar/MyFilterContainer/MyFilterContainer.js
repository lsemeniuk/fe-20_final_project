import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../../../Container/Container';
import styles from './MyFilterContainer.module.scss';
// import Button from '../../Button/Button';
import Icons from '../../../Icons/Icons';
import FormikContainer from '../FormikContainer/FormikContainer';

const MyFilterContainer = ({ sort, checkboxed }) => {
  const [active, setActive] = useState(false);
  const [activeBox, setActiveBox] = useState(styles.container);
  const [activeSort, setActiveSort] = useState(styles.container_sort);
  const [activeBtn, setActiveBtn] = useState(styles.container_btn);
  const [activeDark, setActiveDark] = useState(styles.container_dark_none);
  const handleClickFilter = () => {
    setActive(!active);
    if (active) {
      setActiveBox(`${styles.container} ${styles.active}`);
      setActiveDark(styles.container_dark);
    } else {
      setActiveBox(`${styles.container}`);
      setActiveDark(styles.container_dark_none);
    }

    if (active) {
      setActiveBtn(`${styles.container_btn} ${styles.active}`);
    } else {
      setActiveBtn(`${styles.container_btn}`);
    }
  };
  const handleClickSort = () => {
    setActive(!active);
    if (active) {
      setActiveDark(styles.container_dark);
      setActiveSort(`${styles.container_sort} ${styles.active}`);
    } else {
      setActiveDark(styles.container_dark_none);
      setActiveSort(`${styles.container_sort}`);
    }

    if (active) {
      setActiveBtn(`${styles.container_btn} ${styles.active}`);
    } else {
      setActiveBtn(`${styles.container_btn}`);
    }
  };
  return (
    <>
      <div className={styles.btn_box}>
        {!!sort && (
          <Container>
            <Icons
              className={activeBtn}
              width='50px'
              height='50px'
              type='sort'
              color='rgba(0,0,0, 0.7)'
              onClick={() => handleClickSort()}
            />
          </Container>
        )}
        {!!checkboxed && (
          <Container>
            <Icons
              className={activeBtn}
              width='50px'
              height='50px'
              type='filter'
              color='rgba(0,0,0, 0.7)'
              onClick={() => handleClickFilter()}
            />
          </Container>
        )}
      </div>

      <div className={activeBox}>
        {!!checkboxed && (
          <>
            <div className={activeDark} onClick={() => handleClickFilter()} />
            <Container>
              <FormikContainer classes={styles.container_filter_fixed} checkboxed={checkboxed} sort={sort} />
            </Container>
          </>
        )}
      </div>

      <div className={activeSort}>
<<<<<<< HEAD
        {!!sort && (
          <>
            <div className={activeDark} onClick={() => handleClickSort()} />
=======
<<<<<<< HEAD
        <div className={activeDark} onClick={() => handleClickSort()} />

        {!!sort && (
          <>
=======
        {!!sort && (
          <>
            <div className={activeDark} onClick={() => handleClickSort()} />
>>>>>>> 4bc1c1c80e3ed27932d099270bcd169f2e711adf
>>>>>>> dev
            <Container>
              <FormikContainer classes={styles.container_filter_fixed} checkboxed={checkboxed} sort={sort} />
            </Container>
          </>
        )}
      </div>
    </>
  );
};

MyFilterContainer.propTypes = {
  sort: PropTypes.bool.isRequired,
  checkboxed: PropTypes.bool.isRequired,
};

export default MyFilterContainer;
