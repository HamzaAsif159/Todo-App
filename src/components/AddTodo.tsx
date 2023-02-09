import React from "react"

export default function AddTodo() {
  return (
    <div className="max-w-[500px] mx-auto py-8 flex items-center justify-center">
      <input
        placeholder="Add a task"
        className="p-1 pl-2 border-[#FFFEF2] border border-b-2 border-b-black w-full text-xl bg-[#FFFEF2] focus:outline-none"
      />
      <button className="bg-[#D6E4E5] py-2 px-4 rounded text-lg ml-4">
        Add
      </button>
    </div>
  )
}
