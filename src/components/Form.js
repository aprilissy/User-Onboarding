import React from 'react';

export default function Form(props) {
  const { values, submit, change, disabled, errors} = props;

  const onChange = (evt) => {
    const {name, value, type, checked} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>

      <div> {/* Render Validation Errors */}
       <div>{errors.username}</div>
       <div>{errors.email}</div>
       <div>{errors.password}</div>
       <div>{errors.termsOfService}</div>
      </div>

      <label>
        Name
        <input
        // pass in values prop for all inputs below or create above
          value={values.username}
          name='username'
          type='text'
          onChange={onChange}
        />
      </label>

      <label>
        Email
        <input
          value={values.email}
          name='email'
          type='email'
          onChange={onChange}
        />
      </label>

      <label>
        Password
        <input
          value={values.password}
          name='password'
          type='text'
          onChange={onChange}
        />
      </label>

      <label>
        Terms of Service
        <input 
          checked={values.termsOfService}
          name='termsOfService'
          type='checkbox'
          onChange={onChange}
        />
      </label>

      {/* pass in disabled prop or create it above */}
      <button id='submit' disabled={disabled}>Submit</button> 

    </form>
  );
};