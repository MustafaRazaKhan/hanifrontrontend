import React from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";
import { useCategory } from "../../Context/Category";
import AddBtn from "../../Components/AddBtn";
import Loader from "../../Components/Loader";
import { FaList } from "react-icons/fa";
import Heading from "../../Components/Heading";
import Options from "../../Components/Options";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { useProduct } from "../../Context/Products";

const NewProduct = () => {
  const { allCategory } = useCategory().state;

  const {
    state,
    handleCategory,
    handleSubCategory,
    handleProduct,
    handleProductChange,
    handleFileChange,
  } = useProduct();
  return (
    <div className="flex w-full min-h-screen">
      {/* sidebar */}
      <LeftBar />
      {/* rightbar */}
      <RightBar>
        {/* loader */}
        {state?.isLoading && state?.isLoading ? <Loader /> : null}

        {/* redirect button */}

        {/* <AddBtn link="productslist" icon={<FaList />} title="Products List" /> */}
        {/* category form container start */}
        <div className="cat-container flex flex-wrap justify-center items-center  p-[2px]">
          <div className="form-container w-[75%] h-full shadow p-2">
            {/* heading */}
            <Heading title="Add New Product" />
            <form onSubmit={handleProduct} encType="multipart/form-data">
              {/* category and sub categoyr filed */}
              <div className="form-group flex justify-between flex-wrap gap-2 w-full">
                {/* gold category select option */}

                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <select
                    name="category"
                    onChange={(e) => handleCategory(e)}
                    className=" border border-black p-2 w-full"
                  >
                    <Options value="gold" title="Gold" />
                    <Options value="silver" title="Silver" />
                  </select>
                </div>
                {/* sub category input field */}
                <div className="flex-auto">
                  <select
                    name="subCategory"
                    onChange={(e) => handleSubCategory(e)}
                    className=" border border-black p-2 w-full"
                  >
                    {allCategory?.map((curEle) => {
                      return (
                        <Options
                          value={curEle.subCategory}
                          title={curEle.subCategory}
                          key={curEle._id}
                        />
                      );
                    })}
                  </select>
                </div>
              </div>
              {/* design name  */}
              <div className="form-group flex justify-between flex-wrap gap-2 w-full my-1">
                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <InputField
                    name="designName"
                    placeholder="Design Name"
                    onChange={(e) => handleProductChange(e)}
                    value={state.designName}
                    type="text"
                  />
                </div>
              </div>
              {/* description  */}
              <div className="form-group flex justify-between flex-wrap gap-2 w-full my-1">
                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <InputField
                    name="description"
                    placeholder="Description of Product"
                    onChange={(e) => handleProductChange(e)}
                    value={state.description}
                    type="text"
                  />
                </div>
              </div>
              {/* gross weight  */}
              <div className="form-group flex justify-between flex-wrap gap-2 w-full my-1">
                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <InputField
                    name="grossWeight"
                    placeholder="Gross Weight"
                    onChange={(e) => handleProductChange(e)}
                    value={state.grossWeight}
                    type="text"
                  />
                </div>
              </div>
              {/* net Weight  */}
              <div className="form-group flex justify-between flex-wrap gap-2 w-full my-1">
                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <InputField
                    name="netWeight"
                    placeholder="Net Weight"
                    onChange={(e) => handleProductChange(e)}
                    value={state.netWeight}
                    type="text"
                  />
                </div>
              </div>
              {/* price  */}
              <div className="form-group flex justify-between flex-wrap gap-2 w-full my-1">
                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <InputField
                    name="price"
                    placeholder="Price"
                    onChange={(e) => handleProductChange(e)}
                    value={state.price}
                    type="number"
                  />
                </div>
              </div>
              {/* image  */}
              <div className="form-group flex justify-between flex-wrap gap-2 w-full my-1">
                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <InputField
                    name="photoPaths"
                    placeholder="Product Image"
                    onChange={(e) => handleFileChange(e)}
                    value={state.photoPaths}
                    type="file"
                  />
                </div>
              </div>
              {/* handle submit button */}
              <div className=" w-[150px] lg:w-[220px] my-1">
                <Button title="Submit" />
              </div>
            </form>
          </div>
        </div>
      </RightBar>
    </div>
  );
};

export default NewProduct;
