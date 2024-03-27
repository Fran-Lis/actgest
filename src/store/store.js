import { configureStore } from "@reduxjs/toolkit";
import { actsReducer } from "./slices/actsSlice";
import { openFormReducer } from "./slices/openFormSlice";

export default configureStore({
    reducer: {
        activities: actsReducer,
        openForm: openFormReducer
    }
})