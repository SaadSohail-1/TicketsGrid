import {ToastContainer, toast} from 'react-toastify'
import {RouterProvider} from "react-router-dom"
import BookingPage from './features/booking/BookingPage'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <BookingPage />
  },
])

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
