import React, {useState, useEffect} from "react"
import { connect } from 'react-redux';
import Person from '../components/Person';
import Lonely from '../components/Lonely';
import { getAllUsers} from '../Redux/actioncreators/useractions'
import { updateLikedUsers, updateDislikedUsers, updateSuperLikes} from '../Redux/actioncreators/creeperActions'


const Creeper = (props) => {

    const {currentUser, getAllUsers, updateLikedUsers,people, updateDislikedUsers, updateSuperLikes} = props;


    useEffect(() => {
        getAllUsers()
    },[])
    
      
    const modifySuperficialChoices = (userId, action) => {
        switch (action) {
        case 'ADD_TO_LIKED_USERS':
            if (!currentUser.likedUsers.includes(userId)) {
                updateLikedUsers(currentUser, userId )
            }
            break;
        case 'ADD_TO_DISLIKED_USERS':
            console.log("disliked")
            if (!currentUser.dislikedUsers.includes(userId)) {
                console.log("inside the if statement")
                updateDislikedUsers(currentUser, userId)
            }
            break;
        case 'ADD_TO_SUPERLIKED_USERS':
            console.log("SuperlIked")
            if (!currentUser.superLikedUsers.includes(userId)) {
                updateSuperLikes(currentUser, userId)
            }
            break;
        default:
            return people;
        }
    };

    const checkForUser = () => {
        if(currentUser) {
            if(people[1]) {
                return (<Person
                    key={people[1].id}
                    person={people[1]}
                    modifySuperficialChoices={modifySuperficialChoices}
                    likedUsers={currentUser.likedUsers}
                    />)
            } else {
                return (<Lonely
                    activeUserImage={currentUser.image}
                    likedUsers={currentUser.likedUsers}
                    superLikedUsers={currentUser.superLikedUsers}
                    />
                )}
            } else {
                return null
            }
        }

        return (
            <>
            <div>
               {checkForUser()}
            </div>
            </>
        )
    }


const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        people : state.people
    }
}
export default connect(mapStateToProps, {getAllUsers, updateLikedUsers, updateSuperLikes, updateDislikedUsers})(Creeper);