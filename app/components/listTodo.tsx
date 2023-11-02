"use client";

import React from 'react'
import { useTransition } from "react";
import { Todo } from '../lib/definitions';

export const ListTodo = ({todo,deleteTodo}: {todo: Todo; deleteTodo: (id: number) => Promise<void>;}) => {
    const [isPending, startTransition] = useTransition();

  return (
    <div  key={todo.id}>
        <h5 className="text-2xl font-bold text-gray-900">{todo.description}</h5>
        
        <button className="mt-2 inline-flex items-center px-3 py-2 text-center text-white 
        bg-red-500 rounded-lg rounded-lg hover:bg-red-900"
         onClick={() => { startTransition(() => { deleteTodo(todo.id); });}} >Delete</button>
    </div>
  )
}