import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#1d1c40] flex justify-between py-3 px-5 h-16 text-white items-center'>
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
          <span>KEEPER</span>
          <span className='text-green-500'>/&gt;</span>
          </div>
        {/* <ul className=''>
            <li className='gap-5 flex'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/">Contact</a>
                <a className='hover:font-bold' href="/">About Us</a>
            </li>
        </ul> */}
        <button className='flex bg-green-600 justify-between items-center px-2 rounded-full cursor-pointer hover:bg-green-800'>
          <img className='invert w-10 p-2' src="/icons/github.svg" alt="" />
          <span className='font-bold'>GitHub</span>
        </button>
    </nav>
  )
}

export default Navbar
