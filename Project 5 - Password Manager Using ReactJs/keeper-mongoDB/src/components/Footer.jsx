import React from 'react'

const Footer = () => {
    return (

        <div className='bg-[#1d1c40] text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>

            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt;</span>
                <span>KEEPER</span>
                <span className='text-green-500'>/&gt;</span>
            </div>


            <div className='flex justify-center items-center'>
                Created with  <img className='w-7 mx-1' src="/icons/heart.png" alt="heart" />  by Mrunal.
            </div>

        </div>
    )
}

export default Footer
