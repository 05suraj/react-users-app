import React, { useState,useEffect } from "react";
// import content from "./Contact";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import {Link} from  'react-router-dom'

const schema = yup.object().shape({
 username: yup.string().required("first name should be required please"),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
//   confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Forms = () => {
    const [user ,setUser]=useState([])
    const [udata,setUdata] =useState({})
    
      
   const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: yupResolver(schema),
  
  });
 console.log(udata);
   const onSubmit = async (data,e)=> {
        setUdata(data)
       let datau = {
           id:new Date().getTime().toString() ,
           username: data.username,
           email: data.email,
           password: data.password
       }
     await axios.post('http://localhost:3003/contact', datau)  
     
      loadUserdata();
      reset({})
      localStorage.setItem("userdata", JSON.stringify(datau) )
        
   }
  
   
   
   
  useEffect(()=>{
loadUserdata();


  },[])

  const loadUserdata = async ()=>{
   await axios.get("http://localhost:3003/contact")
      .then(res => {
          setUser(res.data)
      })
      
  }
  
  const deleteUsers = async id => {
    await axios.delete(`http://localhost:3003/contact/${id}`);
    loadUserdata();
  };

  

  return (
    <div className="container">
      
        <div >
      <div className="mt-4 ml-3 card col-md-5 mx-auto">
        <h3 className="text-center mb-4">Form Validation</h3>
        <form  onSubmit={ handleSubmit(onSubmit)}>
             <div class="mb-3" >
  <label for="exampleFormControlInput1" class="form-label">Username</label>
  <input  
  
   type="text" 
  name="username" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="User name" 
  {...register("username")}/>
 <small className="text-danger">{errors.username?.message}</small>
    </div>
     <div class="mb-3" >
  <label for="exampleFormControlInput1" class="form-label">Username</label>
  <input   
   type="text" 
  name="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="email" 
  {...register("email")}/>
 <small className="text-danger">{errors.email?.message}</small>
    </div>
     <div class="mb-3" >
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input   
   type="password" 
  name="password" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="password" 
  {...register("password")}/>
<small className="text-danger">{errors.password?.message}</small>
    </div>
          
       

<div class="mb-3">
  <button type="submit" className="btn btn-success">Submit</button>
</div>
  </form>
      </div>


<div className="col-md-7 mx-auto mt-4 card">
  
    <table class="table">
  <thead>
    <tr>
     
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
      {user.map((res)=>{
          return(
      <tr>
     
      <td>{res.username}</td>
      <td>{res.email}</td>
      <td>{res.password}</td>
      <td><Link onClick={() => deleteUsers(res.id)} className="btn-sm btn-danger"><i className="fa fa-trash"></i></Link></td>
    </tr>
          )
      })}
    
   
  </tbody>
</table>
</div>
</div>


    </div>
  );
};

export default Forms;
