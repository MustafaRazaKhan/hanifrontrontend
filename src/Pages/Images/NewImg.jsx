import React from 'react'
import LeftBar from '../../Components/LeftBar';
import RightBar from '../../Components/RightBar';
import Heading from '../../Components/Heading';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import { useProduct } from '../../Context/Products';

const NewImg = () => {
    const {
        state,
        handleImageChange,
        handleImage
      } = useProduct();
      return (
        <div className="flex w-full min-h-screen">
          {/* sidebar */}
          <LeftBar />
          {/* rightbar */}
          <RightBar>
            {/* loader */}
            {/* {state?.isLoading && state?.isLoading ? <Loader /> : null} */}
             <div className="cat-container flex flex-wrap justify-center items-center  p-[2px]">
              <div className="form-container w-[75%] h-full shadow p-2">
                {/* heading */}
                <Heading title="Add New Image" />
                <form  onSubmit={handleImage} encType="multipart/form-data">
                  <div className="form-group flex justify-between flex-wrap gap-2 w-full my-1">
                    <div className="flex justify-center items-center border w-1/4 flex-auto">
                      <InputField
                        name="imagePaths"
                        placeholder="Slider Image"
                        onChange={(e) => handleImageChange(e)}
                        // value={state.photoPaths}
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
}

export default NewImg