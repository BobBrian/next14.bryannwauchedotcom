
import React from 'react'
import { AddNewTodo } from '../components/addnewTodo'
import * as PostApi from  "@/app/lib/actions"
import { Todo } from '../lib/definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ListTodo } from '../components/listTodo'
import Link from 'next/link'

type Todos = Array<Todo>;

export default async  function Todo() {
  
  const todos: Todos = await PostApi.GetAllTodo();

  const postNewTodo = async (description: string) => {
    "use server";
    await PostApi.AddTodo(description);
    revalidatePath('/todo');
    redirect('/todo');
    
  };
  
  const deleteTodo = async (id: number) => {
    "use server";
    await PostApi.DeleteTodo(id);
    revalidatePath('/todo');
    redirect('/todo');
    
  };

  return (
   <main>
      <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
      <h2 className="text-slate-200 text-center text-3xl mb-6">Todo List Application</h2>

      <button className="mt-2 mb-2 inline-flex items-center px-3 py-2 text-sm font-medium 
        text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 ">
        <Link href="/">Back to Home Page</Link>   
      </button>

      <AddNewTodo addNewTodo={postNewTodo}/>
      
      <div >
          {todos.map((todo) => (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg mb-5 " >
              <ListTodo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
            </div>
          ))}
      </div>
   </main>
  )
}