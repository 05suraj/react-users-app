import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4 mt-4">
      <div className=" mx-auto  ">
      
         <div className="row">
           <div className="col-md-3"><Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      </div>
       <div class="card col-md-5 ">
  
  <ul class="list-group list-group-flush m-2">
    <li className="list-group-item"> <h5>  NAME -:  {user.name}</h5> </li>
        <li className="list-group-item"><h5> USER NAME -:  {user.username}</h5> </li>
        <li className="list-group-item"><h5> EMAIL -:  {user.email}</h5></li>
        <li className="list-group-item"><h5>PHONE -:  {user.phone}</h5></li>
  </ul>
</div>
      
         </div>
     
      
      </div>
    </div>
  );
};

export default User;
