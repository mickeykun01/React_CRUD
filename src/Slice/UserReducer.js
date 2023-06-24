import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
    name : "users",
    initialState : userList,
    
    reducers : {
        addUser: (state , action)=> {
            state.push(action.payload)
        },

        updateUser : (state , action)=>{
            const {id , firstname , lastname , email , gender , status} = action.payload;
            const userUpdate = state.find(user => user.id == id);
            if(userUpdate){
                userUpdate.firstname = firstname;
                userUpdate.lastname = lastname;
                userUpdate.email = email;
                userUpdate.gender = gender;
                userUpdate.status = status;
            }
        },


        deleteUser : (state , action) =>{
            const {id} = action.payload;
            const userDelete = state.find(user => user.id == id);
            if(userDelete){
                return state.filter(f => f.id !== id)
            }
        }

    }
})

export const {addUser , updateUser ,deleteUser} = userSlice.actions 
export default userSlice.reducer;