import React from 'react'
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Course from './pages/Course';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
const App = () => {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/course',
      element:authUser ? <Course/>: <Navigate to='/signup'/>
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
      <Toaster />
      </div>
    </>
  )
}

export default App;