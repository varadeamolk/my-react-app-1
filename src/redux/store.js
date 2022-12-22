import { configureStore, createSlice } from "@reduxjs/toolkit";

let userAccountSlice = createSlice({
  name: "userAccount",

  // Data Member
  initialState: {
    amount: 100,
    username: "rohit",
  },

  // Member Funcn :: Reducer Fncns
  reducers: {
    deposit: (state, action) => {
      state.amount += action.payload;
    },
    withdraw: (state, action) => {
      state.amount -= action.payload;
    },
  },
});

// Maing the Member funcn public
export let { deposit, withdraw } = userAccountSlice.actions;

// Configured The Store :: StateVaiable Public
export default configureStore({
  reducer: { userAccount: userAccountSlice.reducer },
});
