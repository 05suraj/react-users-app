import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [users, setUser] = useState([]);

  const [ldta ,setLdta] = useState({})
    const {id,email,username,password} =ldta
    
   console.log(username);
   const localdata = ()=> {  
   const locad = localStorage.getItem("userdata")
      setLdta(JSON.parse(locad))
   }
  
  

  useEffect(() => {
    loadUsers();
    localdata()
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page {username}</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
               <th scope="col">phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link class="btn-sm btn-primary mr-2" to={`/users/${user.id}`}>
                   <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                    class="btn-sm btn-success mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    <i class="fa fa-pencil-square" aria-hidden="true"></i>
                  </Link>
                  <Link
                    class="btn-sm btn-danger "
                    onClick={() => deleteUser(user.id)}
                  >
                   <i class="fa fa-trash" aria-hidden="true"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
