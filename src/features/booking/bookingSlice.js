import {createSlice} from '@reduxjs/toolkit'
import { MAX_SELECTION } from '../../config/pricing'

const STATUS = {
    LOADING: "loading",
    IDLE: "idle",
    ERROR: "error"
}

const initialState = {
    seats: {}, //seat ids as key and their details object in the value
    rows: {},  //{A: [A-1, A-2,...], B: [B-1, B-2, ...]}
    rowsIds: [], //[A, B, C, D...]

    selectedSeats: [],

    status: STATUS.IDLE
}

const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers: {
        setTheaterData: (state, action) => {
            state.seats = action.payload.seats
            state.rows = action.payload.rows
            state.rowsIds = action.payload.rowsIds
            state.status = STATUS.IDLE
        },
        toggleSeat: (state, action) => {
            const seatId = action.payload
            const isSelected = state.selectedSeats.includes(seatId)
            const seat = state.seats[seatId]

            if (seat.status === "occupied") return
            if (isSelected){
                state.selectedSeats = state.selectedSeats.filter(id => id !== seatId)
            } else {
                if (state.selectedSeats.length >= MAX_SELECTION) return
                state.selectedSeats.push(seatId)
            }
        },
        setLoading: (state) => {
            state.status = STATUS.LOADING
        }
    }
})

export const { setTheaterData, toggleSeat, setLoading} = bookingSlice.actions
export default bookingSlice.reducer