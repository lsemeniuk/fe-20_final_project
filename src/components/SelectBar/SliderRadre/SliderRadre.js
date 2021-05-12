/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage, Form } from 'formik';
import ReactSlider from 'react-slider';
import TextError from '../SelectBar/TextError/TextError';
import styles from './SliderRadre.module.scss';

// react / jsx-props-no-spreading»: [«error», {«custom»: «ignore»}]
const SliderRadre = ({ label, name, min, max, downPrice, setDownPrice, upPrice, setUpPrice }) => {
  return (
    <div className={styles.option_item_box}>
      <label className={styles.option_title}>{label}</label>
      <Form>
        <Field name={name}>
          {({ field }) => (
            <>
              <div className={styles.option_item_range_box}>
                <ReactSlider
                  className='horizontal-slider'
                  thumbClassName={styles.option_item_range_mark}
                  thumbActiveClassName={styles.option_item_range_mark_active}
                  trackClassName={styles.option_item_range_track}
                  defaultValue={[min, max]}
                  ariaLabel={['Lower thumb', 'Upper thumb']}
                  ariaValuetext={state => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => (
                    <div {...props}>{(setDownPrice(state.value[0]), setUpPrice(state.value[1]))}</div>
                  )}
                  pearling
                  minDistance={10}
                  min={min}
                  max={max}
                />
              </div>
              <div className={styles.option_item_input_box}>
                <>
                  <input
                    className={styles.option_item_input}
                    type='text'
                    onChange={e =>
                      setDownPrice(e.target.value >= min && e.target.value <= max ? e.target.value : '100')
                    }
                    id='price_prod'
                    name='price_prod'
                    value={downPrice}
                    val={field.value.includes(downPrice)}
                  />
                  —
                  <input
                    className={styles.option_item_input}
                    type='text'
                    onChange={e => setUpPrice(e.target.value >= min && e.target.value <= max ? e.target.value : '100')}
                    id='price_prod'
                    name='price_prod'
                    value={upPrice}
                    val={field.value.includes(upPrice)}
                  />
                </>
              </div>
            </>
          )}
        </Field>
      </Form>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

SliderRadre.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  downPrice: PropTypes.number.isRequired,
  setDownPrice: PropTypes.func.isRequired,
  upPrice: PropTypes.number.isRequired,
  setUpPrice: PropTypes.func.isRequired,
};

export default SliderRadre;
