import { useState, useEffect } from 'react';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (event) => {
    console.log(event.target);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/*Name Fielde*/}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' name='name' value={values.name} onChange={handleChange} className='form-input' />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
