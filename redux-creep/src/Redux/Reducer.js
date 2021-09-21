const initialState = {
    currentUser: null,
    people: []
  }
  


  const reducer = (state = initialState,action) => {

    const removeUserFromPeopleList = (userId) => {
      console.log(userId)
         return state.people.filter(u => u.id !== userId && u.id !== state.currentUser.id);
    }

    switch(action.type) {
  
      case "LOG_IN_SIGN_UP":
            console.log(action.payload)
            localStorage.setItem("token", action.payload.jwt);
            return {...state, currentUser:action.payload.user};
  
      case "GET_USER":
            return {...state, currentUser:action.payload.user};

      case "UPDATE_USER_INFO":
            return {...state, currentUser:action.payload.user};
  
      case "REMOVE_USER":
            console.log("Hi")
            localStorage.removeItem("token");
            return {...state, currentUser:null};

      case "ALL_USERS":
            const removeUserFromList = action.payload.filter(u => u.id !== state.currentUser.id);
            return {...state, people:removeUserFromList};


      case "UPDATE_LIKED_USERS":
            return {...state, people:removeUserFromPeopleList(action.userId)};

      case "UPDATE_DISLIKED_USERS":
            return {...state, people:removeUserFromPeopleList(action.userId)};

      case "UPDATE_SUPERLIKED_USERS":
            return {...state, people:removeUserFromPeopleList(action.userId)};
  
      default:
      return state;
    }
  
  }

  export default reducer