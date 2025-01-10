import React from "react";

const TodoInput = (props) => {
    const {todoInput,setTodoInput,handleAdd} = props
  return (
    <div className="flex py-4 px-8 my-4 ">
        <input 
            className=" text-lg border-2 font-mono border-slate-600 p-2 rounded-xl mx-3 outline-none w-80"
            placeholder="Enter Your Task Here..." 
            value={todoInput}
            onChange={(e)=>setTodoInput(e.target.value)}
        />
        <button className="border-2 border-slate-600 p-2 rounded-xl mx-3 cursor-pointer font-bold text-slate" onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TodoInput;
