import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTheater } from '../../services/theaterService'
import { setTheaterData, setLoading } from './bookingSlice'
import TheaterGrid from './TheaterGrid'
import { Link } from 'react-router-dom'
import BookingSummary from './BookingSummary'

function BookingPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoading())
        fetchTheater().then(data => {
            dispatch(setTheaterData(data))
        })
    }, [dispatch])

  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl text-white font-bold mb-8'>TicketsGrid MVP</h1>
      <div className='flex items-center justify-between gap-32'>
        <TheaterGrid />
        {/* <Link to={"/summary"} className='bg-white p-3 mt-5 rounded-lg'>Go to Order Summary</Link> */}
        <BookingSummary />
      </div>
    </div>
  )
}

export default BookingPage
