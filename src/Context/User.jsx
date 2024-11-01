import { Children, createContext, useContext, useReducer } from "react";
import reducer from "../Reducers/User";

const UserContext =  createContext();
const initialState ={
    isLoading:false,isError:false,
    msg:"",
    users:[],
    isDelete:false
}

const UserProvider = ({children}) =>{
    const[state,dispatch] =useReducer( reducer,  initialState);
    const getAllUser = async()=>{
        const url = "http://localhost:8080/api/user/users"
        dispatch({
            type:"SET_LOADING"
        })
        const response = await fetch(url,{
            method:"GET",headers:{
                'Content-Type':"application/json"
            },
        });
        const data = await response.json()
        if(data.success){
            dispatch({
                type:"SET_SUCCESS",
                payload:{
                    users:data.allUser
                }
            })
        }

    }
    // todo update user
    const handleUpdate = async(id) =>{
        
            const url = `https://hanibackend.onrender.com/api/user/updateuser/${id}`
            dispatch({
                type:"SET_LOADING"
            })
            const response = await fetch(url,{
                method:"PATCH",headers:{
                    'Content-Type':"application/json"
                },
            });
            const data = await response.json()
            if(data.success){
                dispatch({
                    type:"SET_UPDATE",
                   
                })
                getAllUser()   
        }
    }
    const handleDelete = async(id) =>{
        
            const url = `https://hanibackend.onrender.com/api/user/deleteuser/${id}`
            dispatch({
                type:"SET_LOADING"
            })
            const response = await fetch(url,{
                method:"DELETE",headers:{
                    'Content-Type':"application/json"
                },
            });
            const data = await response.json()
            if(data.success){
                dispatch({
                    type:"SET_DELETE",
                   
                })
                getAllUser()   
        }
    }
    return <UserContext.Provider value={{state,getAllUser,handleUpdate,handleDelete}}>{children}</UserContext.Provider>

    

}
const useUser = ()=>{
   return useContext(UserContext)
}
export {UserProvider,useUser}