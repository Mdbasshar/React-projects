import { useState,useEffect } from 'react'
// Import components
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todoInput,setTodoInput] = useState('')
  const [todoList,setTodoList] = useState([])
  const [selectedTab, setSelectedTab] = useState('All')

  // Selecting Tab
  function handleTab(tab){
    setSelectedTab(tab)
  }
  
  // Adding Todo Task
  function handleAdd(){
    const newTodo = [...todoList]
    if(todoInput.length > 1){
      newTodo.push({todo : todoInput, completed: false,edit: false})
      setTodoList(newTodo)
      setTodoInput('')
    }
    else{
      alert("Please Enter Valid Todo ")
    }
  }

  // Completed Todo Task
  function handleComplete(index){
    const newTodo = [...todoList]
    newTodo.forEach((todo,todoIndex)=>{
      if(todoIndex === index){
        todo.completed = true
      }
    })
    setTodoList(newTodo)
  }

  // Local Storage   {needs to Improve}
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('my-todos'))

    if(todos && todos.length > 0){
      setTodoList(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('my-todos',JSON.stringify(todoList))
  },[todoList])

  // Delete Todo Task
  function handleDelete(index){
    let updatedTodo = todoList.filter((todo,todoIndex)=>todoIndex !== index)
    setTodoList(updatedTodo)
  }

  // Editing Todo
  function handleEdit(index,editTodo,setEditTodo){
    const updatedTodo = [...todoList]
    updatedTodo.forEach((todo,todoIndex)=>{
      if(todoIndex === index){
        todo.edit = !todo.edit
        if(editTodo.length > 0){todo.todo = editTodo}
        else{todo.todo = todo.todo}
        
      }
    })
    setTodoList(updatedTodo)
    setEditTodo('')
  }




  return (
    <>
      <Header />
      <TodoInput 
        todoInput = {todoInput}
        setTodoInput = {setTodoInput}
        handleAdd = {handleAdd}
      />
      <Tabs 
        selectedTab = {selectedTab}
        handleTab = {handleTab}
        />
      <TodoList 
        todoInput = {todoInput}
        todoList = {todoList}
        selectedTab = {selectedTab}
        setTodoInput = {setTodoInput}
        handleComplete = {handleComplete}
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
      />
    </>
  )
}

export default App
