import React from 'react';
import mylogo from '../logo.svg';

const Home = () => {
  return (
    <div style={{backgroundImage: `url("https://images.pexels.com/photos/6405691/pexels-photo-6405691.jpeg")`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: '100px',
    }}>
      <p className='display-3 fw-bold text-center pt-3'>Welcome to Homepage<img
        src='/Animation - 1701606139399.gif'
        width={140}
        height={140} /></p>
      
      <div className='container'>
      <div className='px-5'>
        <p className='text-center fst-italic'>"This is a demo website. 
I am thrilled to share that I have successfully developed a demo website that encapsulates all the knowledge I've acquired about MERN (MongoDB, Express.js, React, Node.js) CRUD operations, as well as state management and hooks in React. This project represents a culmination of my efforts to grasp the intricacies of full-stack development using the MERN stack, showcasing my ability to create, read, update, and delete data seamlessly. The website not only highlights my proficiency in integrating these technologies but also underscores my understanding of the importance of state management and the efficient utilization of React hooks for optimal functionality. Through this hands-on project, I have not only solidified my skills but also gained valuable experience in building dynamic and interactive web applications, setting the stage for my continued growth in the field of web development." </p>
      </div>
      </div>
    </div>
  )
}

export default Home
