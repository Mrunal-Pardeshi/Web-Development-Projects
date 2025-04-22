import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto p-5 my-5 rounded-xl w-[90vw] bg-violet-300 min-h-[85vh]">

        <div className="addToDo">
          <h2 className='text-lg font-bold'>Add ToDo</h2>
          <input className='bg-white' type="text" />
          <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-3 rounded-md text-white'>Add</button>
        </div>

        <h2 className='text-lg font-bold'>Your ToDos</h2>

        <div className="ToDo flex ">

          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nihil!
          </div>

          <div className="buttons">
            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-1 rounded-md text-white'>Edit</button>
            <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-1 rounded-md text-white'>Delete</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
