import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage, Form } from 'formik';
import TextError from '../TextError/TextError';
import styles from './CheckboxGroup.module.scss';

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className={styles.checkbox_box}>
      <label className={styles.option_title}>{label}</label>
      <Form className={`${styles.option_list} `}>
        <Field name={name}>
          {({ field }) =>
            options.map(option =>
              label === option.type ? (
<<<<<<< HEAD
                <div key={option._id} className={styles.option_item}>
=======
<<<<<<< HEAD
                <div className={styles.option_item}>
=======
                <div key={option._id} className={styles.option_item}>
>>>>>>> 4bc1c1c80e3ed27932d099270bcd169f2e711adf
>>>>>>> dev
                  <React.Fragment key={option._id}>
                    <input
                      className={styles.option_item_ckeckbox}
                      type='checkbox'
                      id={option._id}
                      {...field}
                      {...rest}
                      value={option.name}
                      checked={field.value.includes(option.name)}
                    />

                    <label className={styles.option_item_input} htmlFor={option.name}>
                      {option.name}
                    </label>
                  </React.Fragment>
                </div>
              ) : (
                ''
              )
            )
          }
        </Field>
      </Form>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

CheckboxGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckboxGroup;
