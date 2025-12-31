import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSeat } from './bookingSlice'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { SofaIcon } from 'lucide-react'


function Seat({id}) {
    const dispatch = useDispatch()
    const seat = useSelector(state => state.booking.seats[id])
    const isSelected = useSelector(state =>
         state.booking.selectedSeats.includes(id)
    )

    if (!seat) return null

    const isOccupied = seat.status === 'occupied'
    const isvip = seat.tier === 'vip'

    const seatClasses = twMerge(
        clsx(
            'h-10 w-10 flex items-center justify-center rounded-lg transition-all duration-200 transform scale-90 hover:scale-100',
            isOccupied && 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50',
            isSelected && 'bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)] border-green-400',
            !isSelected && !isOccupied && 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white cursor-pointer',
            !isSelected && !isOccupied && isvip && 'border-4 border-yellow-500/80'
        )
    )

    const handleClick = () => {
        // if (!isOccupied){
            dispatch(toggleSeat(id))
        // }
    }

  return (
    <button
    onClick={handleClick}
    disabled = {isOccupied}
    className={seatClasses}
    aria-label={`${seat.tier} seat row ${seat.row} number ${seat.num}, ${seat.status}`}
    >
      <SofaIcon size={20} strokeWidth={2.5} />
    </button>
  )
}

export default Seat
