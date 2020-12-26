
import './App.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
function Add() {
  let history=useHistory();
  const [name1,setName1]=useState("");
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [myname,setMyname]=useState("");
  const [myemail,setMyemail]=useState("");
  const [myusername,setMyusername]=useState("");
  const myName = (event) => {
    setName1(event.target.value);

  };
  const myEmail = (event) => {
    setEmail(event.target.value);
    
  };
  const myUsername = (event) => {
    setUsername(event.target.value);
    
   
  };
  const myData = async(event) => {
    event.preventDefault();
    setMyname(name1);
    setMyemail(email);
    setMyusername(username);
    const user={"name":name1,"email":email,"username":username};
    await axios.post("http://localhost:3003/users",user);
    history.push("/");
  };
  return (
    <div className="container"><br/>
      <h1>Add Details</h1>
       <form onSubmit={myData}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" onChange={myName} value={name1} />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingPassword" onChange={myEmail} value={email}/>
            <label for="floatingPassword">Email</label>
          </div>
          <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingPassword" onChange={myUsername} value={username}/>
            <label for="floatingPassword">Username</label>
          </div>
          
          <button type="submit" className="btn btn-primary mb-3" >Save</button>
          </form>
      
        </div>
        
    
  );
}

export default Add;
