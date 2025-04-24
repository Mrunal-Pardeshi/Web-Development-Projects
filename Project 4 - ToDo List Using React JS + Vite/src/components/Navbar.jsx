import React from 'react'

const Navbar = () => {
  return (
  <nav className='flex justify-around bg-indigo-900 text-white py-3'>
    <div className="logo mx-5">
        <span className='font-bold text-xl'>myTask</span>
    </div>
    <ul className="flex gap-5 mx-5">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
    </ul>
  </nav>
  )
}

export default Navbar
