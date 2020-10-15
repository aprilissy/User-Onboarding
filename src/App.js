import React, { useState, useEffect } from 'react';
import axios from 'axios'
import * as yup from 'yup';
import './App.css';
import Form from './components/Form';
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

  // const getUsers = () => {
  //   axios
  //     .get(`http://localhost:4000/users`)
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       debugger;
  //     });
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
        //console.log('post', newUser);
      })
      .catch((err) => {
        console.log('axios post error',err);
        debugger
      });
  };

  
  
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
    
    setFormValues({
      ...formValues,
      [inputName]:inputValue,
    });
  };
  
  const formSubmit = () => { //Submit new users with any extra spaces removed.
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    }
    postNewUser(newUser);
  };
  console.log('users', users)

  useEffect(() => { // If the form is filled correctly enable the submit button
    validation.isValid(formValues).then((valid) => {
      setDisabledSubmit(!valid);
    });
  }, [formValues]);
  
  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabledSubmit}
        errors={formErrors}
      />
      <pre>
       {JSON.stringify(users)}
      </pre>
    </div>
  );
};

export default App;
