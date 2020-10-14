import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import './App.css';
import './components/Form';
import validation from './components/FormValidation'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
};

const initalFormErrors = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
};

const initialUsers = [];
const initalDisabledSubmit = true;

function App() {
  // State
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [users, setUsers] = useState(initialUsers);
  const [disabledSubmit, setDisabledSubmit] = useState(initalDisabledSubmit);

  // Form Validation
  const inputChange = (inputName, inputValue) => {
    yup
      .reach(validation, inputName) //access FormValidatiaon yup object. param1 = yup validation, param2 = key we want tested.
      .validate(inputValue) // validate based on user input values
      .then(() => { // Works - clear the error
        setFormErrors({
          ...formErrors, [inputName]: '',
        });
      })
      .catch((err) => { // Fails - provide error message created in FormValidation.js
        setFormErrors({
          ...formErrors, [inputName]: err.errors[0], // Validation error from FormValidation.js
        });
      });
  }; 


  return (
    <div className="App">
      <Form />
    </div>
  );
};

export default App;
