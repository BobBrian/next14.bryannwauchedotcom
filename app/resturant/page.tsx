import React from 'react'
import Link from 'next/link'
import * as PostApi from  "@/app/lib/actions"
import { Resturant } from '../lib/definitions';

type Resturants = Array <Resturant>


export default async  function Home() {

  const resturant : Resturants = await PostApi.GetAllResturant();

  return (
    <main>
        <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
        <h2 className="text-slate-200 text-center text-3xl mb-6">Review Application</h2>

        <Link href="/create" className="text-white bg-blue-700 hover:bg-lime-500 
        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
        px-5 py-2.5 mr-2 mb-2 ">Create New Review</Link>
       
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Review By
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Resturant Name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Review Details
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {resturant.map(rest => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={rest.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {rest.authorname}
                        </th>
                        <td className="px-6 py-4">
                            {rest.resturantname}
                        </td>

                        <td className="px-6 py-4">
                          <Link href={`resturant/${rest.id}`} className="text-white bg-blue-700 hover:bg-lime-500 
                          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
                          px-5 py-2.5 mr-2 mb-2 ">Details</Link>
                        </td>
 
                      </tr>
                    ))}    
                </tbody>
            </table>
        </div>

    </main>
  )
}