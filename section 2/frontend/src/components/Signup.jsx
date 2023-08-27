import React, {useState} from 'react';
import mylogo from '../components/logo.png';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
 
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
     .required('Required'),
    
    email: Yup.string()
     .email('Invalid email').required('Email Required'),

    age: Yup.string().required('Required'),
      
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

    repeatpass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password required'),
  });

 
const Signup = () => {

   const navigate = useNavigate();
   const [selImg, setSelImg] = useState("");
   //initialising formik
   const signupForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      repeatpass: "",
      age : ""
    },
    onSubmit : async ( values, {resetForm, setSubmitting} ) => { 
      values.avatar = selImg;

      console.log(values); 
      setSubmitting(true);
      //write code to submit form to server 

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST', 
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      })

      console.log(res.status);
      setSubmitting(false);

      if(res.status === 200){
      Swal.fire({
        icon: 'success',
        title: 'WellDone!',
        text: 'Registered Successfully🤩'
      })
       navigate('/login');
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong😣'
      })
    }
  },
     validationSchema : SignupSchema
  
  });

  const uploadFile = async (e) => {
    if(!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelImg(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd,
    });
    
    console.log(res.status);

    if(res.status === 200){
      console.log('File uploaded successfully');
    }else{
      console.log('File upload failed');
    }
  }


  return (
    <div className='bg-light'>

    <div className='row w-100'>
      <div className='col-md-6 bg-success bg-gradient '>
      <img src={mylogo} style={{width: '140px', height: '90px' }} alt='img'/>
      <p className='display-3 fw-bold text-light fst-italic text-center mt-5'>Welcome!</p>
      <p className='display-5 text-light text-center mt-5'>Sign up</p>
      <p className='text-sm text-light text-center'>to use all the features of our website <br/> and buy our products.</p>
      </div>
      <div className='col-md-6 mt-5'>

      <form onSubmit={signupForm.handleSubmit}>

        <label htmlFor='' className='text-success form-label'>Username</label>
        <span style={{color: 'red', fontSize: '0.8em', marginLeft:10}}>{signupForm.touched.username && signupForm.errors.username}</span>
        <input type='text' className='form-control mb-3' onChange={signupForm.handleChange} value={signupForm.values.username} id='username'/>

        <label htmlFor='' className='text-success form-label'>Email ID</label>
        <span style={{color: 'red', fontSize: '0.8em', marginLeft:10}}>{signupForm.touched.email && signupForm.errors.email}</span>
        <input type='email' className='form-control mb-3' onChange={signupForm.handleChange} value={signupForm.values.email} id='email'/>
        
        <label htmlFor='' className='text-success form-label'>Age</label>
        <span style={{color: 'red', fontSize: '0.8em', marginLeft:10}}>{signupForm.touched.age && signupForm.errors.age}</span>
        <input type='number' className='form-control mb-3' onChange={signupForm.handleChange} value={signupForm.values.age} id='age'/>

        <label htmlFor='' className='text-success form-label'>Password</label>
        <span style={{color: 'red', fontSize: '0.8em', marginLeft:10}}>{signupForm.touched.password && signupForm.errors.password}</span>
        <input type='password' className='form-control mb-3' onChange={signupForm.handleChange} value={signupForm.values.password} id='password'/>

        <label htmlFor='' className='text-success form-label'>Repeat Password</label>
        <span style={{color: 'red', fontSize: '0.8em', marginLeft:10}}>{signupForm.touched.repeatpass && signupForm.errors.repeatpass}</span>
        <input type='password' className='form-control mb-3' onChange={signupForm.handleChange} value={signupForm.values.repeatpass} id='repeatpass'/>

        <input type='file' onChange={uploadFile}/>

        <div className='mt-3'>
        <input type='checkbox' className='form-check-input ' id='check'/>
        <label className='text-success form-check-label ms-2 fst-italic' htmlFor='check'>Remember me</label>
        </div>
    
        <div className='d-flex justify-content-center'>
        <button disabled={signupForm.isSubmitting} className='btn btn-success mt-5 rounded-pill btn-lg'>Sign Up</button>
        </div>

        <p className='mt-3 text-center'><a href='login' className='text-decoration-none text-success fw-bold'>Log in</a></p>

      </form>

      </div>
    </div>

    </div>
  )
}

export default Signup;