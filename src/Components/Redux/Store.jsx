import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/AuthSlice";
import crudReducer from "../Redux/CrudSlice"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    crud: crudReducer, 
  },
});

export default store;
