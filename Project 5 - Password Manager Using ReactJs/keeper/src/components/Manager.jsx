import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className=" mx-auto bg-slate-600 max-w-5xl p-5">
                <h1 className='text-center text-white font-bold text-4xl'>
                    <span className='text-green-500'>&lt;</span>
                    <span>KEEPER</span>
                    <span className='text-green-500'>/&gt;</span>
                </h1>
                <p className='text-white text-center text-lg'>Your own Password Keeper</p>
                <div className="text-white flex flex-col items-center p-4 gap-5">
                    <input className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="" id="" />
                    <div className="flex w-full justify-around gap-8">
                        <input className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="" id="" />
                        <input className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="" id="" />
                    </div>
                    <button className='flex justify-center items-center bg-green-400 rounded-full gap-2.5 px-8 py-1 hover:bg-green-500 cursor-pointer w-fit'>
                        <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager
