import { configureStore } from "@reduxjs/toolkit";
import counterRd from './Child'

const store = configureStore({
    reducer:{
        counter:counterRd
    }
})
export default store