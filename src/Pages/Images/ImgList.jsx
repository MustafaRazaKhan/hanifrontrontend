import React, { useEffect } from 'react'
import { useProduct } from '../../Context/Products'
import LeftBar from '../../Components/LeftBar'
import RightBar from '../../Components/RightBar'
import Heading from '../../Components/Heading'
import {  FaTrash, FaUserEdit } from "react-icons/fa";

const ImgList = () => {
    const {state,deleteSingleImage,getAllImages} = useProduct()
    useEffect(()=>{
      getAllImages()
        },[])
    return (
      <div className="flex w-full min-h-screen">
        <LeftBar/>
        <RightBar>
          {state.isLoading ? <Loader /> : null}
          {/* <AddBtn icon={<FaPlus />} title="New Category" link="newcat" /> */}
          <div className="table-container overflow-x-scroll w-[100%] p-2">
            <Heading title="Image List" />
            <table className="w-full ">
              <thead className="bg-gray-400 text-white">
                <tr className="border-b-[2px] border-black text-center">
                  <th className="p-2">S.no</th>
                 
                 
                  <th>Slider Images</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="border-b-[2px] border-black text-center">
                {state?.allImages?.map((curEle, index) => {
                  return (
                    <tr className="border-b-[2px] text-center" key={curEle._id}>
                      <td>{index+1}</td>
                      <td className="">
                        <div className="flex justify-center">
                         <img src={`https://hanibackend.onrender.com/${curEle.imagePaths}`} className="w-[30px] h-[30px] border border-white  hover:border-2 hover:border-white rounded-full" alt="" />
                        </div>
                      </td>
                      <td className="">
                        <div className="flex justify-center gap-4">
                          <FaTrash className="text-red-600 font-bold" onClick={()=>deleteSingleImage(curEle._id)} />
                           
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
}

export default ImgList