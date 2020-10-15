import * as yup from 'yup';

export default yup.object().shape({
  username: yup
    .string()
    .required('A valid username must be entered to procede')
    .min(3, 'Your username must contain at least 3 characters'),
  email: yup
    .string()
    .email('A valid email address must be entered to procede')
    .required('An email address is required'),
  password: yup
    .string()
    .required('A valid password must be entered to procede')
    .min(5, 'Your password must contain at least 5 characters'),
  termsOfService: yup
    .boolean()
    .oneOf([true], 'Terms of Service must be accepted to procede'),
});