import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Course from './pages/Course';
import Signup from './components/Signup';

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/course',
      element:<Course/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
  ])
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App;