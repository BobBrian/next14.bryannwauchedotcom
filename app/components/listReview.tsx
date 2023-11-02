"use client";

import React from 'react'
import { useTransition } from "react";
import { Resturant } from '@/app/lib/definitions'
import Link from 'next/link'

export const ListReview = (
    {userrest, deleteReview}: {userrest: Resturant ;  deleteReview: (id: number) => Promise<void>;}) => {

    const [isPending, startTransition] = useTransition();

  return (
    <div  key={userrest.id}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Review By {userrest.authorname}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">For {userrest.resturantname}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{userrest.body}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
        text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <Link href="/resturant">Back</Link>   
        </a>
        <button className="mt-2 inline-flex items-center px-3 py-2 text-center text-white 
        bg-red-500 rounded-lg rounded-lg hover:bg-red-900"
         onClick={() => { startTransition(() => {deleteReview(userrest.id); });}} >Delete Review</button>
    </div>
  )
}