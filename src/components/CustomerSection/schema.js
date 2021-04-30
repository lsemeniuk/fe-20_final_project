import * as yup from "yup";

const FIELD_REQUIRED = "This field is required";
const PHONE_REGEXP = /^((\+?3)?8)?0\d{9}$/

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required(FIELD_REQUIRED)
    .min(2, 'Name should have at least 2 characters'),
  lastName: yup
    .string()
    .required(FIELD_REQUIRED)
    .min(2, 'Last Name should have at least 2 characters'),
  age: yup
    .number()
    .required(FIELD_REQUIRED)
    .moreThan(16, "Age must be more than 16 years")
    .max(100, 'You need to be at most 100 years old')
    .positive()
    .integer(),
  address: yup
    .string()
    .required(FIELD_REQUIRED),
  phone: yup
    .string()
    .required(FIELD_REQUIRED)
    // .length(13, 'Phone number should have 10 characters')
    .matches(PHONE_REGEXP, 'The phone number is not valid')

});

export default schema;
