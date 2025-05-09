import React from 'react'
import Toggle from '../../components/toggle/toggle.jsx'  // Import the toggle component
import Navbar from '../../components/navbar/navbar.jsx'
import Login from '@react-login-page/page4';

function Signup() {
  return (
    <div className=''>
        <div className='flex flex-col h-screen'>
            <Navbar/>
            <div className='flex justify-center items-center h-full'>
            <div className='flex w-96 h-[550px] justify-center items-center'>
                <div className="fieldset shadow-indigo-500/50 shadow-lg rounded-lg bg-base-200 border-red-300 rounded-box w-96 border p-4">
                    <div className="flex justify-center items-center mb-4">
                    <h1 className="text-2xl font-bold mt-5 mb-5">Signup to Nester</h1>
                    </div>
                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" />

                <label className="label">Confirm Password</label>
                <input type="password" className="input w-full" placeholder="Confirm Password" />

                <button className="btn btn-neutral mt-8 mr-5 ml-5 mb-6">Login</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
