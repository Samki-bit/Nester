import React from 'react'
import Toggle from '../toggle/toggle'
import { useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation()
    const hiddenPaths= ['/login', '/signup', '/', '/profile']
    const showProfile = !hiddenPaths.includes(location.pathname)

  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <p className='text-2xl font-bold ml-2'>Nester</p>
  </div>
  <div className="flex gap-2">
    <Toggle/>
    {showProfile &&(
    <div className="dropdown dropdown-end">

      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full mt-2">
            <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    )}
  </div>
</div>
  )
}

export default Navbar