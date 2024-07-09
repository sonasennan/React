import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import userDataReducer from './user';
import productDataReducer from './product';
import  formDataReducer from "./form";


export const store = configureStore (
    {
        reducer:
        {
          counter : counterReducer,
          userData : userDataReducer,
          productData : productDataReducer,
          formData : formDataReducer
        }

    }
);



