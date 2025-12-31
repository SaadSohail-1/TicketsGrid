import React from 'react'
import {useSelector} from "react-redux"
import Seat from './Seat'

function TheaterGrid() {
    const rowsIds = useSelector(state => state.booking.rowsIds) 
    //^kon kon si row hai [A, B, C,...]
    const rows = useSelector(state => state.booking.rows) 
    //^har row me kon konsi seat hai {A: [A-1, A-2,...], B: [B-1, B-2,...]}

    if (!rowsIds || rowsIds.length === 0){
        return <div className='text-white'>Loading theater map...</div>
    }
  return (
    <div className='bg-gray-100  flex flex-col gap-4 items-center mt-8 shadow-lg p-20'>
        <div className='w-full max-w-lg h-4 bg-gray-600 rounded-lg mb-8 shadow-[5px_15px_7px_rgba(28,28,28,0.2)]'/>
        <div className='flex gap-11 ml-4'>
            {[1,2,3,4,5,6,7,8].map(num =>
                <span>{num}</span>
            )}
        </div>
        {rowsIds.map(rowsId => (
            <div key={rowsId} className='flex gap-3 items-center'>
                <span className='text-gray-500 font-mono font-bold text-right'>{rowsId}</span>
                {rows[rowsId].map(seatId => (
                    <Seat key={seatId} id={seatId} />
                ))}
            </div>
        ))}
    </div>
  )
}

export default TheaterGrid
