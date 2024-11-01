const reducer = (state,action) =>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }
        case "SET_SUCCESS":
            return{
                ...state,
                isLoading:false,
                users:action.payload.users
            }
        case "SET_UPDATE":
            return{
                ...state,
                isLoading:false,
                
            }
        case "SET_DELETE":
            return{
                ...state,
                isLoading:false,
                
            }
        default:
            return{
                ...state
            }
    }
}

 export default reducer