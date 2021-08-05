import React from 'react'



const UserDetaile = (props)=>{
      const {username , email,password} = props.data

    return(
        <table class="table">
  <thead>
    <tr>
     
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
    </tr>
  </thead>
  <tbody>
     
      <tr>
     
      <td>{username}</td>
      <td>{email}</td>
      <td>{password}</td>
    </tr>
         
    
   
  </tbody>
</table>
    )
}
export default UserDetaile