import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
   <div className='container-fluid bg-light mt-3 p-3'>   
        <div className='row'>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.first_name}  width={100} height={100}/>
          <button type="button" class="btn btn-primary position-relative">
           {user.id} <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"></span>
</button>
          <p> {user.first_name}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default UserList;
