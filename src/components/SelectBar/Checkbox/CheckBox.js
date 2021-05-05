import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBox.module.scss';
import SliderRadre from '../SliderRadre/SliderRadre';

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
const CheckBox = ({ filtered, name, title, min, max }) => {
  const [check] = useState(false);
  const [Checked, setChecked] = useState([]);
  const [classActive, setclassActive] = useState(null);
  const [downPrice, setDownPrice] = useState(min);
  const [upPrice, setUpPrice] = useState(max);
  const [myOption, setMyOption] = useState(null);

  useEffect(() => {
    setMyOption(myOption);
  }, [myOption]);

  const handleToggle = (id, label) => {
    const currentIndex = Checked.indexOf(id);
    const newCheccked = [...Checked];

    if (currentIndex === -1) {
      newCheccked.push(id);
    } else {
      newCheccked.splice(currentIndex, 1);
    }

    setMyOption(label);
    // setSelected({ id, label });
    setChecked(newCheccked);
  };

  const renderCheckBoxLists = () => (
    <div className={styles.checkbox_box}>
      <div
        className={styles.option_title}
        // onMouseEnter={() => setclassActive(`${styles.is_active}`)}
        // onMouseLeave={() => setclassActive(null)}
      >
        {title}
        {/* <span className={styles.option_title_arrow}>{'>'}</span> */}
      </div>
      {title !== 'Цена' && (
        <ul
          className={`${styles.option_list} `}
          header
          // onMouseEnter={() => setclassActive(`${styles.is_active}`)}
          // onMouseLeave={() => setclassActive(null)}
        >
          {filtered !== undefined
            ? filtered.map(item =>
                item.type === title ? (
                  <>
                    {item.type === 'Цена' ? (
                      <li className={styles.option_item}>
                        <SliderRadre
                          min={min}
                          max={max}
                          downPrice={downPrice}
                          setDownPrice={setDownPrice}
                          upPrice={upPrice}
                          setUpPrice={setUpPrice}
                        />
                      </li>
                    ) : (
                      <>
                        {item.type !== 'Цена' && item.type !== 'sort' ? (
                          <li className={styles.option_item} key={item._id}>
                            <input
                              onChange={() => handleToggle(item)}
                              type='checkbox'
                              checked={Checked.indexOf(item._id) === -1 ? check : true}
                            />
                            <span onClick={() => handleToggle(item)}>{item.name}</span>
                          </li>
                        ) : (
                          ''
                        )}
                      </>
                    )}
                  </>
                ) : (
                  ''
                )
              )
            : ''}
        </ul>
      )}
      {title === 'Цена' && (
        <div
          className={`${styles.option_list_price}`}
          header
          onMouseEnter={() => setclassActive(`${styles.is_active}`)}
          onMouseLeave={() => setclassActive(null)}
        >
          {filtered !== undefined
            ? filtered.map(item =>
                item.type === title ? (
                  <>
                    {item.type === 'Цена' ? (
                      <p className={styles.option_item}>
                        <SliderRadre
                          min={min}
                          max={max}
                          downPrice={downPrice}
                          setDownPrice={setDownPrice}
                          upPrice={upPrice}
                          setUpPrice={setUpPrice}
                        />
                      </p>
                    ) : (
                      ''
                      // <>
                      //   {item.type !== 'Цена' && item.type !== 'sort' ? (
                      //     <li className={styles.option_item} key={item._id}>
                      //       <input
                      //         onChange={() => handleToggle(item)}
                      //         type='checkbox'
                      //         checked={Checked.indexOf(item._id) === -1 ? check : true}
                      //       />
                      //       <span>{item.name}</span>
                      //     </li>
                      //   ) : (
                      //     ''
                      //   )}
                      // </>
                    )}
                  </>
                ) : (
                  ''
                )
              )
            : ''}
        </div>
      )}
    </div>
  );

  const renderlists = () => (
    <div className={styles.checkbox_box}>
      <div
        className={styles.option_title}
        onMouseEnter={() => setclassActive(`${styles.is_active}`)}
        onMouseLeave={() => setclassActive(null)}
      >
        {myOption !== null ? myOption : 'сначала дешевле'}
      </div>
      <ul
        className={`${styles.option_list_sort} ${classActive}`}
        header
        onMouseEnter={() => setclassActive(`${styles.is_active}`)}
        onMouseLeave={() => setclassActive(null)}
      >
        <>
          {filtered !== undefined
            ? filtered.map(item =>
                item.type === name ? (
                  <>
                    <li className={styles.option_select} key={item._id}>
                      <span
                        role='button'
                        tabIndex={0}
                        onClick={() => setMyOption(item.name)}
                        onKeyDown={() => setMyOption(item.name)}
                      >
                        {item.name}
                      </span>
                    </li>
                  </>
                ) : (
                  ''
                )
              )
            : ''}
        </>
      </ul>
    </div>
  );

  return (
    <div onMouseLeave={() => setclassActive(null)}>
      {!!title && <>{renderCheckBoxLists()}</>}
      {!!name && <> {renderlists()}</>}
    </div>
  );
};

CheckBox.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default CheckBox;
