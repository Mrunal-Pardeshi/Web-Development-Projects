import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
 

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }

  const handleEdit = () => {

  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos);
  }
  

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto p-5 my-5 rounded-xl w-[90vw] bg-violet-300 min-h-[85vh]">

        <div className="addToDo my-5">
          <h2 className='text-lg font-bold'>Add ToDo</h2>
          <input onChange={handleChange} value={todo} className='bg-white w-1/2' type="text" />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-3 rounded-md text-white cursor-pointer'>Add</button>
        </div>

        <h2 className='text-lg font-bold'>Your ToDos</h2>

        <div className="ToDos">
          {todos.map(item=>{
             return <div key={item.id} className="ToDo flex w-1/2 my-3.5 justify-between">
              <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
              <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-1 rounded-md text-white cursor-pointer'>Edit</button>
                <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold mx-1 rounded-md text-white cursor-pointer'>Delete</button>
              </div>
            </div>
            })}
        </div>

      </div>
    </>
  )
}

export default App
