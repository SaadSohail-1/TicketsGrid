import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { TIER_PRICING } from '../../config/pricing'

function BookingSummary() {
    const selectedIds = useSelector(state => state.booking.selectedSeats)
    const seatsObj = useSelector(state => state.booking.seats)

    //map through the selectedIds, use each seat as a key in seatsObj to get tier
    //look up tier price, sum it up
    const totalPrice = selectedIds.reduce((total, id) => {
        const seat = seatsObj[id]
        if(!seat) return total
        return total + TIER_PRICING[seat.tier]
    }, 0)

  return (
    <div className='bg-gray-800 p-6 rounded-lg border border-gray-700 w-full md:w-80 h-fit sticky top-8'>
        <h2 className='text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2'>
            Booking Summary
        </h2>
        {selectedIds.length === 0 ? (
            <p className='text-gray-400 italic'>Select a seat to proceed.</p>
        ) : (
            <div className='space-y-4'>
                <ul className='space-y-2 max-h-60 overflow-y-auto pr-2'>
                    {selectedIds.map(id => {
                        const seat = seatsObj[id]
                        const price = TIER_PRICING[seat.tier]
                        return (
                            <li key={id} className='flex justify-between text-sm text-gray-300'>
                                <span>Row {seat.id.split("-")[0]} Seat {seat.num} ({seat.id})</span>
                                <span className='font-mono text-gray-400'>${price / 100}</span>
                            </li>
                        )
                    })}
                </ul>

                <div className='border-t border-gray-700 pt-4 flex justify-between items-center text-white'>
                    <span className='font-semibold'>Total</span>
                    <span className='text-xl font-bold text-green-400'>
                        ${totalPrice / 100}
                    </span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors mt-4">
                    Checkout
                </button>
            </div>
        )}


    </div>
  )
}

export default BookingSummary
