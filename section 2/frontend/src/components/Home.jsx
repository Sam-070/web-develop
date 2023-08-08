import React from 'react';
import mylogo from '../logo.svg';

const Home = () => {
  return (
    <div style={{backgroundImage: `url("isg-colourful-swirl-box_cq5dam.web.512.341")`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    }}>
      <h1>Welcome to Homepage</h1>
      <h1 className='myclass'>My React App</h1>
     <input type='text'/>
     <h1 style={{color: 'green',fontSize: 30}}>Using Inline CSS</h1>
     <img src="/logo192.png" alt=""/>
     <img src={mylogo} alt=''/>    
    </div>
  )
}

export default Home
