import React, { useState } from "react";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=  useNavigate()
  const [mobile,setMobile] = useState("")
  const [password,setPassword] = useState("")
  const handleInputs = (e)=>{
   const {name,value} =e.target
   if(name=="mobile"){
    setMobile(value)
   }
   else{
    setPassword(value)
   }

  }
  const handleSubmit =async(e) =>{
    e.preventDefault()
    const response = await fetch("https://hanibackend.onrender.com/api/auth/login",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        mobile,password
      })
    })
    const data = await response.json();
   
    if(data.success){
     if(data.existingUser.isAdmin){
      toast.success("Admin Login Successful")
      navigate("/dashboard")
      
     }
     else{
      toast.error("Sorry ! You are not the admin")
     }
    }
    else{
      toast.error(data.msg)
    }
  }
  return (
    <div className="min-h-screen flex justify-center items-center p-2">
      <div className="login-container shadow w-[25rem] mx-auto h-[25rem] p-8">
        <div className="form-container">
          <div className="flex justify-between items-center gap-10">
            <h1 className="text-2xl border-b-2 border-black">Welcome back</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4148/4148675.png"
              alt=""
              className="w-[70px] h-[70px]"
            />
          </div>
          <div>
            <h3 className="text-2xl uppercase py-1 cursive">Admin</h3>
          </div>
          <form
            onSubmit={handleSubmit}
          >
          {/* email field */}
          <div className="flex-wrap flex flex-col my-1">
            <label htmlFor="" className="mb-2">
              Mobile No
            </label>
            <InputField name="mobile" placeholder= "Mobile No" onChange={(e)=>handleInputs(e)} type="text" />
          </div>
          {/* password */}
          <div className="flex-wrap flex flex-col my-1">
            <label htmlFor="" className="mb-2">
              Password
            </label>
            <InputField name="password" placeholder= "Password" onChange={(e)=>handleInputs(e)}  type="password" />

          </div>
          {/*  login button  */}
          <div className=" my-2">
          <Button title="SUBMIT"/>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
