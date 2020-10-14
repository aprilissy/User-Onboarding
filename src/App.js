import React from 'react';
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

  // Form Validation
  const inputChange = (inputName, inputValue) => {
    yup
      .reach(validation, inputName)
      .validate(inputValue)
      .then(() => {
        
      })
  }


  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
