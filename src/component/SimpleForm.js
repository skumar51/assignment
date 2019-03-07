import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { submitFormData } from '../store/action';

const validate = values => {
  const errors = {};
  if (!values.name || !values.name.trim()) {
    errors.name = 'Required';
  }
  if (!values.surName || !values.surName.trim()) {
    errors.surName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length <= 6) {
    errors.password = 'Must be 6 characters or greater';
  }

  if (values.password !== values.cPassword) {
    errors.cPassword = 'Password mismatch';
  }

  return errors;
};

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const SimpleForm = props => {
  const { handleSubmit, pristine, submitting, dispatch, history } = props;
  return (
    <form>
      <Field
        name="name"
        label="Name"
        component={RenderField}
        type="text"
        placeholder="Name"
      />
      <Field
        name="surName"
        label="Sur Name"
        component={RenderField}
        type="text"
        placeholder="Sur Name"
      />
      <Field
        name="email"
        label="Email"
        component={RenderField}
        type="email"
        placeholder="Email"
      />
      <div>
        <label>Gender</label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
              
            />
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Occupation</label>
        <div>
          <Field name="favoriteOccupation" component="select" value="">
            <option value="">-select-</option>
            <option value="java">Java</option>
            <option value="react">React</option>
            <option value="python">Python</option>
          </Field>
        </div>
      </div>
      <Field
        label="Password"
        name="password"
        component={RenderField}
        type="password"
        placeholder="Password"
      />
      <Field
        label="Confirm Password"
        name="cPassword"
        component={RenderField}
        type="password"
        placeholder="Confirm Password"
      />
      <div>
        <label>Address</label>
        <div>
          <Field name="address" component="textarea" />
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={pristine || submitting}
          onClick={handleSubmit(form => {
            dispatch(submitFormData(form));
            history.push('/info');
          })}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: 'simple',
  touchOnBlur: false,
  validate
})(SimpleForm);

export default connect()(ReduxForm);
