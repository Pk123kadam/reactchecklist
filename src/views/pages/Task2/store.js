import { configureStore } from '@reduxjs/toolkit'
import FormReducer from "./FormReducer"

export const store = configureStore({
    reducer: {
        form: FormReducer
    },
})