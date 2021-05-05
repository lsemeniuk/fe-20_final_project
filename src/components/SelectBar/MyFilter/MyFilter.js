// import axios from 'axios';
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltersOperation } from '../../../store/filter/operations';
import { getFiltersSelector } from '../../../store/filter/selectors';
import CheckBox from '../Checkbox/CheckBox';
import Button from '../../Button/Button';
import styles from './MyFilter.module.scss';

const MyFilter = ({ classes, sort, checkboxed }) => {
  // const [selected, setSelected] = useState(null);
  // const [arrSelected] = useState([]);
  const dispatch = useDispatch();
  // const [cardBlock, setCardBlock] = useState([]);

  const filters = useSelector(getFiltersSelector);

  useEffect(() => {
    dispatch(getFiltersOperation());
  }, [dispatch]);
  console.log('MyFilter ~ filters', filters);

  const handleClickResponse = e => {
    e.preventDefault();
  };
  // const getProducts = () => {
  // useEffect(() => {
  //   axios('./products.json').then(res => {
  //     console.log('🚀 ~ file: MyFilter.js ~ line 24 ~ axios ~ res', res);

  //     if (res.status === 200) {
  //       setCardBlock(res.data);
  //       console.log(' res.data', res.data);
  //     } else {
  //       alert('Failed to fectch product datas');
  //     }
  //   });
  // }, []);

  // const renderCards = () => {
  //   const arrCurrentPrice = cardBlock.map(item => {
  //     return item.currentPrice;
  //   });
  //   arrCurrentPrice.sort(function (a, b) {
  //     return a - b;
  //   });
  //   console.log(arrCurrentPrice);
  //   return <CheckoutCart cardBlock={cardBlock} Filters={Filters} setFilters={setFilters} />;
  // };

  // const boxSelected = () => {
  //   const select = selected !== null ? arrSelected.push(selected) : '';
  //   console.log(' boxSelected ~ arrSelected', arrSelected, select);
  //   if (arrSelected[0] !== null && arrSelected !== false) {
  //     return (
  //       <div>
  //         {arrSelected.map(item => (
  //           <CurrentSelected id={item.id} name={item.label} />
  //         ))}
  //       </div>
  //     );
  //   }
  //   return '';
  // };

  return (
    <div className={styles.select_container_box}>
      <section className={styles.select_box}>
        {!!checkboxed && (
          <div className={classes}>
            <div className={styles.select_box_filter}>
              <h4 className={styles.select_heading}>Фильтр:</h4>
              <CheckBox title='Иконки' filtered={filters} />
              <CheckBox title='Цена' filtered={filters} min={0} max={400000} />
              <CheckBox title='Стать' filtered={filters} />
              <CheckBox title='Бренд' filtered={filters} />
              <CheckBox title='Наличие' filtered={filters} />
              <Button type='button' title='Найти' className={styles.select_btn} onClick={handleClickResponse} />
            </div>
          </div>
        )}
        {!!sort && (
          <div className={styles.select_box_sort}>
            <h4 className={styles.select_heading}>Сортировка:</h4>
            <CheckBox name='sort' filtered={filters} />
          </div>
        )}
      </section>
    </div>
  );
};

MyFilter.propTypes = {
  sort: PropTypes.bool.isRequired,
  checkboxed: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
};

export default memo(MyFilter);
