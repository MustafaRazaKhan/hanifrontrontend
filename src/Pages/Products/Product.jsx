import React, { useEffect } from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";
import { useLocation } from "react-router-dom";
import { useProduct } from "../../Context/Products";
import Heading from "../../Components/Heading";

const Product = () => {
  const name = useLocation().pathname.split("/")[2]
 const {getSingleProduct,state}= useProduct()
  useEffect(()=>{
getSingleProduct(name)
  },[name])
  return (
    <div className="flex w-full min-h-screen">
      <LeftBar />
      <RightBar>
      <div className="table-container w-[100%] p-2">
          <Heading title="Product Details" />
          <div className="container flex justify-center items-center">
            <div>
            <div className="img flex justify-center items-center">
            <img src={`https://hanibackend.onrender.com/${state?.product?.photoPaths}`} className=" border border-white  hover:border-2 hover:border-white rounded-full w-[50%] h-[50%]" alt="" />
            </div>
            <div className="flex justify-between p-4 text-blue-300 font-bold text-xl uppercase">
            <div>{state?.product?.category}</div>
            <div>{state?.product?.subCategory}</div>
            </div>
            <div className="flex justify-between p-4 font-bold text-xl uppercase">
            <div>{state?.product?.grossWeight}</div>
            <div>{state?.product?.netWeight}</div>
            </div>
            <div>
            <div className="border-b border-black">"{state?.product?.description}"</div>
            </div>
            </div>
         
            
          </div>
        </div>
      </RightBar>
    </div>
  );
};

export default Product;
