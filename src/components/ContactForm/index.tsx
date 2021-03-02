import * as Yup from 'yup';
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
} from 'formik';

import TextField from 'components/TextField';
import { useTheme } from 'react-jss';
import postTimeSlots from 'api/actions/postTimeSlots.api';
import { ChosenTimeRangesStateType, PostTimeSlots, TimeSlot } from 'types/companies.type';
import FormError from './components/FormError';
import useStyles from './ContactForm.styles';

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const InnerContactForm = ({
  touched,
  errors,
  isSubmitting,
} : FormikProps<ContactFormValues>) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.formWrapper}>
      <Form>
        <TextField label="First name" type="firstName" name="firstName" />
        {touched.firstName && errors.firstName && <FormError>{errors.firstName}</FormError>}

        <TextField label="Last name" type="lastName" name="lastName" />
        {touched.lastName && errors.lastName && <FormError>{errors.lastName}</FormError>}

        <TextField label="E-Mail" type="email" name="email" />
        {touched.email && errors.email && <FormError>{errors.email}</FormError>}

        <TextField label="Phone number" type="phone" name="phoneNumber" />
        {touched.phoneNumber && errors.phoneNumber && <FormError>{errors.phoneNumber}</FormError>}

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </div>
  );
};

// The type of props MyForm receives
interface ContactFormAdditionalProps {
  chosenTimeSlots: ChosenTimeRangesStateType,
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

const ContactForm = withFormik<ContactFormAdditionalProps, ContactFormValues>({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }),

  validationSchema: ContactFormSchema,

  // Add a custom validation function (this can be async too!)
  validate: (values: ContactFormValues) => {
    const errors: FormikErrors<ContactFormValues> = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    return errors;
  },

  handleSubmit: (values, formikBag) => {
    const selectedSlots:{ [company_name: string]: TimeSlot } = {};
    formikBag.props.chosenTimeSlots.forEach((chosenTimeRange) => {
      selectedSlots[`${chosenTimeRange.companyId}`] = chosenTimeRange.timeslot;
    });

    const postData: PostTimeSlots = {
      user_data: {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone_number: values.phoneNumber,
      },
      selected_slots: selectedSlots,
    };

    postTimeSlots(postData).then(
      // eslint-disable-next-line no-console
      (result) => console.info(result),
    );
  },
})(InnerContactForm);

export default ContactForm;
