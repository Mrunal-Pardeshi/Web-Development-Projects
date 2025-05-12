import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])


    const showPassword = () => {
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })

    }

    const deletePassword = (id) => {
        console.log("Deleting password with id ", id)
        let confirmation = confirm("Do you really want to delete this password??")
        if (confirmation) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
    }

    const editPassword = (id) => {
        console.log("Editing password with id ", id)
        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast.success('Copied to clipbard!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Slide",
        });

        navigator.clipboard.writeText(text)
    }




    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                transition="Slide"
            />

            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className=" mx-auto max-w-5xl p-5">
                <h1 className='text-center text-white font-bold text-4xl'>
                    <span className='text-green-500'>&lt;</span>
                    <span>KEEPER</span>
                    <span className='text-green-500'>/&gt;</span>
                </h1>
                <p className='text-white text-center text-lg'>Your own Password Keeper</p>
                <div className="text-white flex flex-col items-center p-4 gap-5">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="site" id="" />
                    <div className="flex w-full justify-around gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="text" name="username" id="" />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='bg-white rounded-full text-black font-bold border border-green-500 w-full p-4 py-2' type="password" name="password" id="" />
                            <span className='absolute right-[10px] top-[10px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='' width={23} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-600 rounded-full gap-2.5 px-5 py-1 hover:bg-green-800 cursor-pointer w-fit'>
                        <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
                        Save Password
                    </button>
                </div>
                <div className="passwords">
                    <h2 className='text-white font-bold text-2xl py-3'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-white'>No Passwords To Show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full text-white overflow-hidden rounded-lg">
                            <thead className='bg-green-600'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-black'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 border-y-1 border-black text-center'>
                                            <div className='flex justify-center items-center'><a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='lordIconCopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "5px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                        colors="primary:#ffffff">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border-y-1 border-black text-center  '><div className='flex justify-center items-center'>{item.username}
                                            <div className='lordIconCopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "5px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                        </td>
                                        <td className='py-2 border-y-1 border-black text-center  '>
                                            <div className='flex justify-center items-center'>
                                                {item.password}
                                                <div className='lordIconCopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "5px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover"
                                                        colors="primary:#ffffff" >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border-y-1 border-black text-center  '>
                                            <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/xyfswyxf.json"
                                                    trigger="hover"
                                                    colors="primary:#ffffff"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                })
                                }

                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manager
