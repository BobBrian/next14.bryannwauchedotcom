"use client";
import React from 'react'
import { useState, useTransition } from "react";

export const AddNewTodo = ({ addNewTodo }: { addNewTodo: any }) => {

    const [description,setDescription] = useState("")
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e:any) => {
      e.preventDefault();
      startTransition(() => {
        addNewTodo(description);
      });
      
    }

  return (
    <form className="w-full flex mb-10" onSubmit={handleSubmit}>
      <div>
          <label className="block mb-2 text-lg font-medium text-slate-200 ">Todo Task</label>
          <input value={description} className="bg-gray-50 border border-stone-600 text-gray-900 
          rounded-lg focus:ring-blue-500 w-full" placeholder="Enter Task Here" onChange={(e) =>setDescription(e.target.value)} required/>
      </div> 

        <button className="mt-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg">Add New Task</button>
    </form>
  )
}
