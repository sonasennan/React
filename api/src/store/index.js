import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import userDataReducer from './user'


export const store = configureStore (
    {
        reducer:
        {
          counter : counterReducer,
          userData : userDataReducer
        },

    }
);



