import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name :"",
  mail_id:"",
  reg_no: "",
  Token:""

}
const userSlice = createSlice({
  name:"user",
  initialState,
  reducers :{
    updateUser(state,action){
      state.name = action.payload.name;
      state.mail_id = action.payload.mail_id;
      state.reg_no = action.payload.reg_no;
      state.Token = action.payload.Token

    },

  },

}

)
export const {updateUser} = userSlice.actions 

export default userSlice.reducer
