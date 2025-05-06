import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-500 flex justify-around px-3 py-2 text-white'>
        <div className="logo font-extrabold text-2xl">KEEPER</div>
        <ul className=''>
            <li className='gap-5 flex'>
                <a href="/">Home</a>
                <a href="/">Contact</a>
                <a href="/">About Us</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
