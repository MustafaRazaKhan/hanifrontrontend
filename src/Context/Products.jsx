import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/Product";
import { toast } from "react-toastify";


const Product = createContext();
const initialState = {
  isLoading: false,
  allProduct: [],
  isError: false,
  msg: "",
  category: "",
  subCategory: "",
  designName: "",
  description: "",
  netWeight: "",
  grossWeight: "",
  photoPaths: null, // Change to store the file object, not the string
  price: "",
  product:{},
  imagePaths:null,
  allImages:[]
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // todo Handle category
  const handleCategory = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_CATEGORY",
      payload: { name, value },
    });
  };

  // ? Handle sub-category
  const handleSubCategory = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_SUBCATEGORY",
      payload: { name, value },
    });
  };

  // ! Handle other product details
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_PRODUCT",
      payload: { name, value },
    });
  };

  // todo Handle file change (for a single file)
  const handleFileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0]; // ? Store the file object itself, not just its name
    dispatch({
      type: "SET_FILE",
      payload: { name, value: file },
    });
  };
  // ? handle all images changes
  const handleImageChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0]; // ? Store the file object itself, not just its name
    dispatch({
      type: "SET_IMAGE",
      payload: { name, value: file },
    });
  };
  //  todo Handle form submission to upload product details along with the file
  const handleProduct = async (e) => {
    e.preventDefault();
    // Create FormData to include both product details and the image file
    const formData = new FormData();
    // Append product data to FormData
    formData.append("category", state.category);
    formData.append("subCategory", state.subCategory);
    formData.append("designName", state.designName);
    formData.append("description", state.description);
    formData.append("grossWeight", state.grossWeight);
    formData.append("netWeight", state.netWeight);
    formData.append("price", state.price);
    // Append the image to FormData if there is a file
    if (state.photoPaths) {
      formData.append("photoPaths", state.photoPaths); // The actual file object
    }
    try {
      // Send both product data and the image in a single request
      const response = await fetch(
        "https://hanibackend.onrender.com/api/product/newproduct",
        {
          method: "POST",
          body: formData, // Send the entire FormData
        }
      );

      const data = await response.json();
     

      if (data.success) {
        toast.success(data.msg)
      } else {
        toast.error(data.msg)      }
    } catch (error) {
     
    }
  };
  // todo handle all images submit
  const handleImage = async (e) => {
    e.preventDefault();
    // Create FormData to include both product details and the image file
    const formData = new FormData();
  
    // Append the image to FormData if there is a file
    if (state.imagePaths) {
      formData.append("imagePaths", state.imagePaths); // The actual file object
    }
    try {
      // Send both product data and the image in a single request
      const response = await fetch(
        "http://localhost:8080/api/image/add",
        {
          method: "POST",
          body: formData, // Send the entire FormData
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success(data.msg)
      } else {
        toast.error(data.msg)      }
    } catch (error) {
     
    }
  };
 
  //  todo get all products
  const getAllProducts = async() =>{
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        "https://hanibackend.onrender.com/api/product/allproduct",
        {
          method: "GET",
        }
      );
      const data = await response.json();
     
      if(data.success){
        dispatch({
          type:"GET_ALL_PRODUCTS",
          payload:{
            products:data?.allProduct
          }
       
        })
      } 
    } catch (error) {
     
    }
  }
  //  todo get all images
  const getAllImages = async() =>{
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        "https://hanibackend.onrender.com/api/image/images",
        {
          method: "GET",
        }
      );
      const data = await response.json();
     
      if(data.success){
        dispatch({
          type:"GET_ALL_IMAGES",
          payload:{
            allImages:data?. allImages
          }
       
        })
      } 
    } catch (error) {
     
    }
  }
 
  const getSingleProduct = async(id) => {
    // Fetch product logic here, e.g., making an API call
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        `https://hanibackend.onrender.com/api/product/product/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
    
      if(data.success){
        dispatch({
          type:"GET_PRODUCT",
          payload:{
            product:data?.product
          }
       
        })
      } 
    } catch (error) {
    
    }
    // ...
  };
  const deleteSingleProduct = async(id) => {
    // Fetch product logic here, e.g., making an API call
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        `https://hanibackend.onrender.com/api/product/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      
      if(data.success){
        toast.success(data.msg)

      } 
    } catch (error) {
     
    }
    
  };
  const deleteSingleImage = async(id) => {
    // Fetch product logic here, e.g., making an API call
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        `https://hanibackend.onrender.com/api/image/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      
      if(data.success){
        toast.success(data.msg)

      } 
    } catch (error) {
     
    }
    
  };

  return (
    <Product.Provider
      value={{
        state,
        handleCategory,
        handleSubCategory,
        handleProduct,
        handleProductChange,
        handleFileChange,
        getSingleProduct,deleteSingleProduct,getAllProducts,handleImageChange,handleImage,getAllImages,deleteSingleImage
      }}
    >
      {children}
    </Product.Provider>
  );
};

const useProduct = () => {
  return useContext(Product);
};

export {  ProductProvider,useProduct };
