const reducer = (state, action) => {
  // Fix order of params
  switch (action.type) {
    case "SET_FIELD":
      // Destructure once here
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };

    case "SET_SELECT":
      // No need to redeclare name and value
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_LOADING":
      // No need to redeclare name and value
      return {
        ...state,
        isLoading: true,
      };
    case "SET_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "GET_ALL_CATEGORY":
      return {
        ...state,
        isLoading: false,
        allCategory: action.payload,
      };

    default:
      return state; // Return state directly without spreading
  }
};

export default reducer;
