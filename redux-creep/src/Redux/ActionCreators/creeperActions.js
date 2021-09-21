const baseURL = "http://localhost:3001/"

export const updateLikedUsers = (currentUser, likedUserId) => {
     return dispatch => {
        updatingMatches("likes",currentUser,likedUserId)
         .then(r => r.json())
         .then(response => {
             dispatch({
                 type:"UPDATE_LIKED_USERS",
                 payload: response,
                 userId: likedUserId
             })
         })
     }
}

export const updateDislikedUsers = (currentUser, dislikedUserId) => {
    return dispatch => {
        console.log("inside the dispatch")
        updatingMatches("dislikes",currentUser,dislikedUserId)
        .then(r => r.json())
        .then(response => {
            dispatch({
                type:"UPDATE_DISLIKED_USERS",
                payload: response,
                userId: dislikedUserId
            })
        })
    }
}



export const updateSuperLikes = (currentUser, superLikesId) => {
    return dispatch => {
        updatingMatches("superlikes",currentUser,superLikesId)
        .then(r => r.json())
        .then(response => {
            dispatch({
                type:"UPDATE_SUPERLIKED_USERS",
                payload: response,
                userId: superLikesId
            })
        })
    }
}


const updatingMatches = (keyword,user,secondUserId) => {
    debugger
    return fetch(baseURL + `/users/${user.id}/${keyword}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            currentUser:user,
            secondUserId: secondUserId
        })
    })
}