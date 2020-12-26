import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';

const Table=()=>{
  
  const [users,setUser]=useState([]);
  useEffect(()=>{
    loadUser();
  },[]);
  const loadUser=async()=>{
    const result=await axios.get("http://localhost:3003/users");
    //http://localhost:3003/users/
    setUser(result.data);
  };
  const onDelete=async(id)=>{
     await axios.delete("http://localhost:3003/users/"+id);

 loadUser();
    
  };

    return(
<>
<br/><table className=" container table ">
  <thead>
    <tr>
    <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(
        <tr>
        <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td> <Link className="btn btn-primary-light " to={'/view/'+user.id}>View</Link>
             <Link className="btn btn-primary-light " to={'/edit/'+user.id}>Edit</Link>
             <Link className="btn btn-primary-danger " onClick={()=>onDelete(user.id)}>Delete</Link>
             </td>
      </tr>
      ))
    }
    
   
  </tbody>
</table>
</>);
}

export default Table;