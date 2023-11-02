import {  Todo } from "./definitions";
//Todo Actions
const API_PATH = "http://localhost:3100/todos";

export async function GetAllTodo() {
    const res = await fetch(API_PATH)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json() as unknown as Array<Todo>;
}

export  async function AddTodo(description: string) {
    const res = await fetch(API_PATH, {
        method: "POST",
        body: JSON.stringify({
            description,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    })
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export const DeleteTodo = async (id:  number) => {
    return await fetch(`http://localhost:3100/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
        console.log('Todo Deleted')
        
    })
};


//Resturant Actions