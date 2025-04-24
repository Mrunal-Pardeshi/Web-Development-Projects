import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
 

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setShowFinished] = useState(true)

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (params) => {
    setShowFinished(!showfinished)
  }
  
  
  useEffect(() => {
    let toDoString = localStorage.getItem("todos")
    if(toDoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLocal()
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLocal()
    
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLocal()
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos);
    saveToLocal()
  }
  

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto p-5 my-5 rounded-xl bg-violet-300 min-h-[85vh] md:w-1/2 w-full">
        <h1 className='font-bold text-center text-3xl'>MyTask - Manage all your ToDos at one place</h1>
        <div className="addToDo flex flex-col gap-5 my-5">
          <h2 className='text-2xl font-bold'>Add ToDo</h2>
          <div className="flex">
          <input onChange={handleChange} value={todo} className='bg-white w-full rounded-lg px-5 py-1' type="text" />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 hover:bg-violet-950 mx-3 p-3 py-2 text-sm font-bold disabled:bg-violet-800 rounded-md text-white cursor-pointer'>Save</button>
          </div>
        </div>
          <input className='my-4' type="checkbox" onChange={toggleFinished} checked={showfinished} /> Show Finished

        <div className='h-[1px] bg-black opacity-20 w-full mx-auto my-3'></div>

        <h2 className='text-2xl font-bold'>Your ToDos</h2>

        <div className="ToDos">
        {todos.length === 0 && <div className='m-5'>No ToDos To Display</div>}
          {todos.map(item=>{
             return (showfinished || !item.isCompleted) && <div key={item.id} className="ToDo flex my-3.5 justify-between">
              <div className='flex'>
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-1 rounded-md text-white cursor-pointer'><FaEdit /></button>
                <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-1 rounded-md text-white cursor-pointer'><MdDeleteForever /></button>
              </div>
            </div>
            })}
        </div>

      </div>
     
    </>
  )
}

export default App
