import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
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
        {/*Name Field*/}
        <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
        {/*Email Field*/}
        <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
        {/*Password Field*/}
        <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
