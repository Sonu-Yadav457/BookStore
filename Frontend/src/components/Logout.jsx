import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { set } from 'react-hook-form';
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser] = useAuth();
    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully!")
            window.location.reload();
        } catch(error){
            toast.error("Error:",error);
        }
    }
  return (
    <div>
        <button className='bg-red-600 text-white px-3 py-2 rounded cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout