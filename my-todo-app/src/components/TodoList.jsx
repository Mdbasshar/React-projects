import React, { useState } from "react";

const TodoList = (props) => {
  const { todoList, selectedTab, handleComplete, handleDelete, handleEdit } =
    props;
  const [editTodo, setEditTodo] = useState("");
  const filterList =
    selectedTab === "All"
      ? todoList
      : selectedTab === "Pending"
      ? todoList.filter((val) => !val.completed)
      : todoList.filter((val) => val.completed);
  return (
    <div className="px-8 mt-2">
      {todoList.length === 0 ? (
        <h1 className="text-4xl text-zinc-100 font-mono font-bold text-center mt-8">
          Add some task
        </h1>
      ) : (
        filterList.map((todo, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 bg-zinc-100 items-center py-2 px-6 rounded-sm mb-3"
            >
              <button
                className="bg-slate-400 px-2 py-1 text-zinc-100 rounded-md cursor-pointer"
                onClick={() => handleComplete(index)}
              >
                ✔
              </button>
              {/* Todo Items */}
              <li
                className={`${
                  todo.completed ? "text-green-800 line-through" : ""
                } list-none font-mono font-bold text-2xl py-3 px-6 capitalize`}
              >
                {todo.edit ? (
                  <input
                    className="border-2 font-mono border-slate-600 p-2 rounded-xl outline-none w-[400px]"
                    placeholder={todo.todo}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                  />
                ) : (
                  todo.todo
                )}
              </li>
              <div className="ml-auto flex gap-6 *:bg-slate-500 *:rounded-md *:py-1 *:px-2 *:cursor-pointer text-zinc-100 font-bold font-mono text-xl">
                {!todo.completed && (
                  <button
                    onClick={() => handleEdit(index, editTodo, setEditTodo)}
                  >
                    {!todo.edit ? "Edit" : "Save"}
                  </button>
                )}
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TodoList;
