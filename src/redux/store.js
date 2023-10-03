import { configureStore } from "@reduxjs/toolkit";
import typeSlice from "./slice/type.slice";

export const store = configureStore({
    reducer: {
        type: typeSlice
    }
})