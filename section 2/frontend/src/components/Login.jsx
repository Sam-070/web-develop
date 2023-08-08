import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string().required('Password Required')
});

const Login = () => {

//initialising formik
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit : ( values ) => { 
      console.log(values); 
      //write code to submit form to server
    },

    validationSchema : LoginSchema
  });

  return (
    <div>
    <div className='w-25'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='text-center'>Login Form</h3>
          <hr/>

          <form onSubmit={loginForm.handleSubmit}>

            <label htmlFor=''>Email Address</label>
            <span style={{color: 'red', fontSize: '0.8em', marginLeft: 10}}>{loginForm.errors.email}</span>
            <input type='email' className='form-control mb-3' name='email' onChange={loginForm.handleChange} value={loginForm.values.email}/>

            <label htmlFor=''>Password</label>
            <span style={{color: 'red', fontSize: '0.8em', marginLeft: 10}}>{loginForm.errors.password}</span>
            <input type='password' className='form-control mb-3' name='password' onChange={loginForm.handleChange} value={loginForm.values.password}/>

            <button className='btn btn-primary w-100 mt-5'>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;