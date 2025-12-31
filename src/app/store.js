import { configureStore } from "@reduxjs/toolkit";
import booking from "../features/booking/bookingSlice"

const store = configureStore({
    reducer: {
        booking
    }
})

export default store;