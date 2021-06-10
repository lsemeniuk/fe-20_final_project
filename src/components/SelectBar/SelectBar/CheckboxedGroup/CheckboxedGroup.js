// import React from 'react';
// import PropTypes from 'prop-types';
// import { Field, ErrorMessage } from 'formik';
// import TextError from '../TextError/TextError';
// import styles from '../CheckBoxGroup/CheckboxGroup.module.scss';

// /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
// function CheckboxGroup(props) {
//   const { label, name, nameCur, options, ...rest } = props;
//   //   const [checked, setChecked] = useState(false);

//   const checkbox = (field, option) => {
//     if (nameCur === option.type || (nameCur === 'categories' && option.type !== 'hot')) {
//       return (
//         <div key={option._id}>
//           <div key={option._id} className={styles.option_item}>
//             <React.Fragment key={option._id}>
//               <input
//                 className={styles.option_item_ckeckbox}
//                 type='checkbox'
//                 id={option._id}
//                 {...field}
//                 {...rest}
//                 value={option.id}
//                 checked={field.value.includes(option.id)}
//               />
//               <label className={styles.option_item_input} htmlFor={option.name}>
//                 {option.name}
//               </label>
//             </React.Fragment>
//           </div>
//         </div>
//       );
//     }
//     if (nameCur === 'hot') {
//       return (
//         <div key={option._id}>
//           <div key={option._id} className={styles.option_item}>
//             <React.Fragment key={option._id}>
//               <input
//                 className={styles.option_item_ckeckbox}
//                 type='checkbox'
//                 id={option._id}
//                 {...field}
//                 {...rest}
//                 value={option.id}
//                 checked={field.value.includes(option.id)}
//               />
//               <label className={styles.option_item_input} htmlFor={option.name}>
//                 {option.name}
//               </label>
//             </React.Fragment>
//           </div>
//         </div>
//       );
//     }
//   };
//   return (
//     <div className={styles.checkbox_box}>
//       <label className={styles.option_title}>{label}</label>
//       <div className={`${styles.option_list} `}>
//         <Field name={name}>{({ field }) => options.map(option => checkbox(field, option))}</Field>
//       </div>
//       <ErrorMessage component={TextError} name={name} />
//     </div>
//   );
// }

// CheckboxGroup.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   nameCur: PropTypes.string.isRequired,
//   options: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// export default CheckboxGroup;
