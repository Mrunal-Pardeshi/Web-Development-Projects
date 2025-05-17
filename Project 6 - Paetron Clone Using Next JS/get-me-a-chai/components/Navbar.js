import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-950 text-white flex justify-between px-4 h-15 items-center'>
            <div className="logo font-bold text-lg">GetMeAChai</div>
        <ul className='flex justify-between gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>SignUp</li>
            <li>Login</li>
        </ul>
    </nav> 
  )
}

export default Navbar
