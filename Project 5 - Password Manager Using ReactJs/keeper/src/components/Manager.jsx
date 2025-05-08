import React from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef();
    const showPassword = () => {
        alert("Show the Password")
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }
    }

    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className=" mx-auto max-w-5xl p-5">
                <h1 className='text-center text-white font-bold text-4xl'>
                    <span className='text-green-500'>&lt;</span>
                    <span>KEEPER</span>
                    <span className='text-green-500'>/&gt;</span>
                </h1>
                <p className='text-white text-center text-lg'>Your own Password Keeper</p>
                <div className="text-white flex flex-col items-center p-4 gap-5">
                    <input placeholder='Enter Website URL' className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="" id="" />
                    <div className="flex w-full justify-around gap-8">
                        <input placeholder='Enter Username' className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="" id="" />
                        <div className="relative">
                            <input placeholder='Enter Password' className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="" id="" />
                            <span className='absolute right-[10px] top-[10px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='' width={23} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
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
