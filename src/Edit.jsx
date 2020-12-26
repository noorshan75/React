
import './App.css';
import React, { useState,useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
function Edit() {
  let history=useHistory();
  const {id}=useParams();

  
  const [myname,setMyname]=useState("");
  const [myemail,setMyemail]=useState("");
  const [myusername,setMyusername]=useState("");
  const myName = (event) => {
    setMyname(event.target.value);
    
 console.log(event.target.value);
  };
  const myEmail = (event) => {
    setMyemail(event.target.value);
  };
  const myUsername = (event) => {
    setMyusername(event.target.value);
  };
  const myData = async(event) => {
    event.preventDefault();
    setMyname(myname);
    setMyemail(myemail);
    setMyusername(myusername);
    const user={"name":myname,"email":myemail,"username":myusername};
    await axios.put("http://localhost:3003/users/"+id,user);
    history.push("/");
  };
  useEffect(()=>{
      loadUser();
  },[]);
  const loadUser=async()=>{
      const result=await axios.get("http://localhost:3003/users/"+id);
      setMyname(result.data.name);
      setMyemail(result.data.email);
    setMyusername(result.data.username);
  };
  return (
    <div className="container"><br/>
      <h1>Update Details</h1>
       <form onSubmit={myData}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" onChange={e=>myName(e)} name="myname" value={myname} />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingPassword" onChange={myEmail} name="myemail" value={myemail}/>
            <label for="floatingPassword">Email</label>
          </div>
          <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingPassword" onChange={myUsername} name="username" value={myusername}/>
            <label for="floatingPassword">Username</label>
          </div>
          
          <button type="submit" className="btn btn-primary mb-3" >Update</button>
          </form>
        
        </div>
        
    
  );
}

export default Edit;
