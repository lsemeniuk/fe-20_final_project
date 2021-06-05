import React, { useState } from 'react';
import Container from '../../../Container/Container';
import styles from './MyFilterContainer.module.scss';
// import Button from '../../Button/Button';
import Icons from '../../../Icons/Icons';
import FormikContainer from '../FormikContainer/FormikContainer';

const MyFilterContainer = () => {
  const [active, setActive] = useState(false);
  const [activeBox, setActiveBox] = useState(styles.container);
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

  return (
    <>
      <div className={styles.btn_box}>
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
      </div>

      <div className={activeBox}>
        <>
          <div className={activeDark} onClick={() => handleClickFilter()} />
          <Container>
            <FormikContainer classes={styles.container_filter_fixed} />
          </Container>
        </>
      </div>
    </>
  );
};

export default MyFilterContainer;
