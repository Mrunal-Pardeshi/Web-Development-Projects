import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#7877c64d] flex justify-between py-3 px-5  text-white items-center'>
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          <span>KEEPER</span>
          <span className='text-green-500'>/&gt;</span>
          </div>
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
