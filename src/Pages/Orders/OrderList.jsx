import React from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";
import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../Components/Heading";

const OrderList = () => {
  const [cart, setCart] =useState([])
  const getCartItem =async() =>{
    const url = `http://192.168.29.35:8080/api/cart/allcart`;
    
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          // Ensure the token is prefixed correctly
        },
         // Pass the product id in the request body
      });
  
      // Check if the response is ok (status in the range 200-299)
    
   
      const data = await response.json();
      if(data.success){
        setCart(data.allCart)
      }
    
    } catch (error) {
      // Handle the error
    }
  
  }
  useEffect(()=>{
  getCartItem()
  },[])
  return (
    <div className="flex w-full min-h-screen">
      <LeftBar />
      <RightBar>
        {/* {state.isLoading ? <Loader /> : null} */}
        {/* <AddBtn icon={<FaPlus />} title="New Category" link="newcat" /> */}
        <div className="table-container overflow-x-scroll w-[100%] p-2">
          <Heading title="Order List" />
          <table className="w-full ">
            <thead className="bg-gray-400 text-white">
              <tr className="border-b-[2px] border-black text-center">
                <th className="p-2">S.no</th>
                <th>Customer Name</th>
                <th>Customer Mobile No</th>
               
                <th>Category</th>
                <th>SubCategory</th>
                <th>Design Name</th>
                <th>Photo</th>
                <th>Gross Weight</th>
                <th>Net Weight</th>
               
              </tr>
            </thead>
            <tbody className="border-b-[2px] border-black text-center">
            
              {cart?.map((curEle, index) => {
                return (
                  <tr className="border-b-[2px] text-center" key={curEle._id}>
                    <td className="p-2">{index + 1}</td>
                    <td>{curEle?.userName}</td>
                    <td>{curEle?.userMobile}</td>
                    
                    <td>{curEle?.category}</td>
                    <td>{curEle?.subCategory}</td>
                    <td>{curEle?.designName}</td>
                    <td className=" ">
                      <div className="flex justify-center">
                       <img src={`https://hanibackend.onrender.com/${curEle.photoPaths}`} className="w-[30px] h-[30px] border border-white  hover:border-2 hover:border-white rounded-full" alt="" />
                      </div>
                    </td>
                    <td>{curEle.grossWeight}</td>
                    <td>{curEle.netWeight}</td>
                    {/* <td>{curEle?.address}</td> */}
                   
                    
                  
                    <td className="">
                      {/* <div className="flex justify-center gap-4">
                        <FaTrash className="text-blue-300 font-bold" onClick={()=>handleDelete(curEle._id)} />
                          
                      </div> */}
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

export default OrderList;
