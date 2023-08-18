import React, { useEffect } from 'react'

const ManageUser = () => {

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
    };

    useEffect( () => {
        fetchUserData();
    },[]);

  return (
    <div>
      ManageUser
    </div>
  )
}

export default ManageUser
