import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    
  });

  const { name, username, email, phone } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="col-md-6 mx-auto  card shadow p-3 mt-4">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control  "
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control "
              placeholder=" Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              className="form-control "
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control "
              placeholder="Phone "
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
         
           <div className="text-center">
          <button className="btn btn-primary pl-4 pr-4">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
