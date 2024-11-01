import React, { useEffect } from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";
import { useProduct } from "../../Context/Products";
import Heading from "../../Components/Heading";
import {  FaTrash, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const {state,deleteSingleProduct,getAllProducts} = useProduct()
  useEffect(()=>{
    getAllProducts()
      },[])
  return (
    <div className="flex w-full min-h-screen">
      <LeftBar />
      <RightBar>
        {state.isLoading ? <Loader /> : null}
        {/* <AddBtn icon={<FaPlus />} title="New Category" link="newcat" /> */}
        <div className="table-container overflow-x-scroll w-[100%] p-2">
          <Heading title="All Product List" />
          <table className="w-full ">
            <thead className="bg-gray-400 text-white">
              <tr className="border-b-[2px] border-black text-center">
                <th className="p-2">S.no</th>
                <th>Category Name</th>
                <th>Sub Category</th>
                <th>Design Name</th>
                <th>Gross Weight</th>
                <th>Net Weight</th>
                <th>Description</th>
                <th>Product Images</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="border-b-[2px] border-black text-center">
              {state?.allProduct?.map((curEle, index) => {
                return (
                  <tr className="border-b-[2px] text-center" key={curEle._id}>
                    <td className="p-2">{index + 1}</td>
                    <td>{curEle?.category}</td>
                    <td>{curEle?.subCategory}</td>
                    <td>{curEle?.designName}</td>
                    <td>{curEle?.grossWeight}</td>
                    <td>{curEle?.netWeight}</td>
                    <td>{curEle?.description}</td>
                    <td className=" ">
                      <div className="flex justify-center">
                       <img src={`https://hanibackend.onrender.com/${curEle.photoPaths}`} className="w-[30px] h-[30px] border border-white  hover:border-2 hover:border-white rounded-full" alt="" />
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-center gap-4">
                        <FaTrash className="text-red-600 font-bold" onClick={()=>deleteSingleProduct(curEle._id)} />
                          <Link to ={`/product/${curEle._id}`}>
                        <FaUserEdit className="text-green-600 font-bold"   />
                          </Link>
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

export default ProductsList;
