import React from 'react';

export default function Form(props) {
  const {} = props;

  const onChange = (evt) => {

  };

  return (
    <form>
{/* pass in disabled prop or create it above */}
      <button disabled={disabled}>Submit</button> 

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
          value={values.emeil}
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
        <input 
          checked={values.termsOfService}
          name='termsOfService'
          type='checkbox'
          onChange={onChange}
        />
      </label>
    </form>
  );
};