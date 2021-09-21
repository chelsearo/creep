const baseUrl = "http://localhost:3001/"

export const handleSignup = newUser => {
    
    return dispatch => {
      return fetch(baseUrl + "users", {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({user:newUser})
      })
      .then(response => response.json())
      .then(response => {
        if(!response.error) {
          dispatch({
            type:"LOG_IN_SIGN_UP",
            payload:response
          })
        }else {
          response.error.map(error => alert(error))
          throw new Error(response.error)
        }
      })
    }
  }



  export const updateBio = (userInfo, currentUser) => {
    
    return dispatch => {
      return fetch(baseUrl + `users/${currentUser.id}`, {
        method:"PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({user: userInfo})
      })
      .then(response => response.json())
      .then(response => {
        if(!response.error) {
          dispatch({
            type:"UPDATE_USER_INFO",
            payload:response
          })
        }else {
          response.error.map(error => alert(error))
          throw new Error(response.error)
        }
      })
    }
  }


  export const handleLogin = user => {
    return dispatch => {
      return fetch(baseUrl + "/login", {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      })
      .then(response => response.json())
      .then(response => {
        if(!response.error) {
          dispatch({
            type:"LOG_IN_SIGN_UP",
            payload:response
          })
        } else {
          alert(response.error)
          throw new Error(response.error)
        }
      })
    }
  }


  export const fetchUser = token => {
    return dispatch => {
      return fetch(baseUrl + "autoLogin", {
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization":token
        }
      })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type:"GET_USER",
          payload:response
        })
      })
    }
  }


  export const removeCurrentUser = () =>{
    return dispatch => {
      dispatch({
        type:"REMOVE_USER"
      })
    }
  }


  export const getAllUsers = () => {
      return dispatch => {
          fetch(baseUrl + "/users")
          .then(r => r.json())
          .then(response => {
            dispatch({
                type:"ALL_USERS",
                payload:response
              })

          })
      }

  }