import { SEAT_TIERS, TIER_PRICING, MAX_SELECTION } from "../config/pricing.js"


const generateTheaterData = () => {

    const ROWS = ['A', 'B', 'C', 'D', 'E', 'F']
    const SEATS_PER_VIEW = 8
    const VIP_ROWS = 2
    
    const seatsInfo = {
        seats: {},
        rows: {},
        rowsIds: []
    }

    ROWS.forEach((row, index) => {
        seatsInfo.rowsIds.push(row)
        seatsInfo.rows[row] = []
        for (let i = 1; i <= SEATS_PER_VIEW ; i++) {
            const seatId = `${row}-${i}`
            seatsInfo.rows[row].push(seatId)
            seatsInfo.seats[seatId] = {
                id: seatId,
                num : i,
                tier: index < VIP_ROWS ? SEAT_TIERS.VIP : SEAT_TIERS.STANDARD,
                status: "available"
            }
        }
    });
    return seatsInfo
}

export const fetchTheater = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(generateTheaterData())
        }, 500)
    })
}