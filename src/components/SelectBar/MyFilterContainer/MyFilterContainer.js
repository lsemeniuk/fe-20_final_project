import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../Container/Container';
import MyFilter from '../MyFilter/MyFilter';
import styles from './MyFilterContainer.module.scss';

const MyFilterContainer = ({ sort, checkboxed }) => {
  return (
    <>
      <div className={styles.container}>
        {!!checkboxed && (
          <div className={styles.container_filter}>
            <Container>
              <MyFilter classes={styles.container_filter_fixed} checkboxed={checkboxed} />
            </Container>
          </div>
        )}
      </div>
      {!!sort && (
        <Container>
          <div className={styles.container_sort}>
            <MyFilter sort={sort} />
          </div>
        </Container>
      )}
    </>
  );
};

MyFilterContainer.propTypes = {
  sort: PropTypes.bool.isRequired,
  checkboxed: PropTypes.bool.isRequired,
};

export default MyFilterContainer;
