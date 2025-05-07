import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#7877c64d] flex justify-around py-2 h-12 text-white items-center'>
        <div className="logo font-bold text-2xl">KEEPER</div>
        <ul className=''>
            <li className='gap-5 flex'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/">Contact</a>
                <a className='hover:font-bold' href="/">About Us</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
