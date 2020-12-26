
import './App.css';
import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function View() {
    const {id}=useParams();

    // const [users,setUser]=useState("");

    const [myname,setMyname]=useState("");
    const [myemail,setMyemail]=useState("");
    const [myusername,setMyusername]=useState("");
    useEffect(()=>{
      loadUser();
    },[]);
    const loadUser=async()=>{
      const result=await axios.get("http://localhost:3003/users/"+id);
      console.log(result.data);
      setMyname(result.data.name);
      setMyemail(result.data.email);
      setMyusername(result.data.username);
    };
  return (
    <div className="container">
      <h1>View Details</h1>
     


   <table className=" container table ">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      
    </tr>
  </thead>
  <tbody>
    
      
        <tr>
        <td>{id}</td>
        <td>{myname}</td>
        <td>{myemail}</td>
        <td>{myusername}</td>
       
      </tr>
      
    
    
   
  </tbody>
</table>

    </div>
  );
}

export default View;
