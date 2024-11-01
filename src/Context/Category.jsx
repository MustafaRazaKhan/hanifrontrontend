import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/Category";
import { toast } from "react-toastify";
import { API_URL } from '../config';

const Category = createContext();
const initialState = {
  category: "", // Always set a default value
  subCategory: "",
  allCategory: [], // Default to an empty string
  isLoading: false,
  isError: false,
  msg: "",
};

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // todo set all input fields
  const handleFields = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "SET_FIELD",
      payload: {
        name,
        value,
      },
    });
  };
  const handleSelect = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "SET_SELECT",
      payload: {
        name,
        value,
      },
    });
  };

  // ! handle add to category to databse
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({
        type: "SET_LOADING",
      });
      const response = await fetch(`https://hanibackend.onrender.com/api/category/newcat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: state.category,
          subCategory: state.subCategory,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(data.msg);
        dispatch({
          type: "SET_SUCCESS",
        });
      } else {
        toast.success(data.msg);
      }
    } catch (error) {}
  };
  const getAllCategory = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
      });
      const response = await fetch(
        "https://hanibackend.onrender.com/api/category/allcategory",
        {
          method: "GET", // GET is the default method, but it's good to be explicit
          headers: {
            "Content-Type": "application/json", // Specify the correct content type
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        dispatch({
          type: "GET_ALL_CATEGORY",
          payload: data.allCategory,
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Category.Provider
      value={{ handleFields, state, handleSubmit, handleSelect }}
    >
      {children}
    </Category.Provider>
  );
};

const useCategory = () => {
  return useContext(Category);
};
export { CategoryProvider, useCategory };
