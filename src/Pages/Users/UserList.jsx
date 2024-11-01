import React, { useEffect } from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";
import Heading from "../../Components/Heading";
import { useUser } from "../../Context/User";
import {  FaTrash, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserList = () => { 
  const {state,getAllUser,handleUpdate,handleDelete} = useUser()
  useEffect(()=>{
getAllUser()
  },[])
  return (
    <div className="flex w-full min-h-screen">
      <LeftBar />
      <RightBar>
        {/* {state.isLoading ? <Loader /> : null} */}
        {/* <AddBtn icon={<FaPlus />} title="New Category" link="newcat" /> */}
        <div className="table-container overflow-x-scroll w-[100%] p-2">
          <Heading title="Users List" />
          <table className="w-full ">
            <thead className="bg-gray-400 text-white">
              <tr className="border-b-[2px] border-black text-center">
                <th className="p-2">S.no</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>Address</th>
                <th>IsVerified</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="border-b-[2px] border-black text-center">
            
              {state?.users?.map((curEle, index) => {
                return (
                  <tr className="border-b-[2px] text-center" key={curEle._id}>
                    <td className="p-2">{index + 1}</td>
                    <td>{curEle?.name}</td>
                    <td>{curEle?.mobile}</td>
                    <td>{curEle?.address}</td>
                    <td>{curEle?.isVerified?<div className="bg-green-500 text-white p-1 capitalize my-1 w-[150px] mx-auto">verified</div>:<div className="bg-red-500 text-white p-1 capitalize my-1 w-[150px] mx-auto" onClick={()=>handleUpdate(curEle._id)}>not Verified</div>}</td>
                    
                  
                    <td className="">
                      <div className="flex justify-center gap-4">
                        <FaTrash className="text-blue-300 font-bold" onClick={()=>handleDelete(curEle._id)} />
                          
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </RightBar>
    </div>
  );
};

export default UserList;
