import React from 'react'

export default function Signup() {
    return (
        <>
            <div className=''>
                <div className="login">SignUp</div>
                <div>
                    <input type="email" placeholder='Email' className='border-2 border-black rounded-md p-2 m-2' />
                </div>
                <div>
                    <input type="text" placeholder='Username' className='border-2 border-black rounded-md p-2 m-2' />
                </div>
                <div>
                    <input type="text" placeholder='Full Name' className='border-2 border-black rounded-md p-2 m-2' />
                </div>
                <div>
                    <input type="password" placeholder='Password' className='border-2 border-black rounded-md p-2 m-2' />
                </div>
                <div>
                    <input type="password" placeholder='Confirm Password' className='border-2 border-black rounded-md p-2 m-2' />
                </div>
                <div>
                    <button className='bg-blue-500 text-white rounded-md p-2 m-2'>Login</button>
                </div>
            </div>
        </>

    )
}
