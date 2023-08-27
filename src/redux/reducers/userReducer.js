const initialState = {
    isAuthenticated: false,
    userInfo: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          userInfo: action.payload,
        };
      case 'USER_LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          userInfo: null,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  