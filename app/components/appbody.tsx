'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function AppBody() {
  const router = useRouter()

  return (
    <div className="bg-slate-200  w-[calc(80%-2rem)]  max-w-5xl pt-16 pr-16 pb-8 pl-16  m-auto z-2"> 
     <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center underline">Hello Welcome to My Protfolio Site</h5> 
          </a>
     <div className="flex  pb-8">
          <div className="p-6 bg-transparent  ">
          <p className="mb-3">I am full-stack developer which means I specialize in  building both The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) of a website which require different skill sets. </p>
          <h2 className="underline">Technology Specilizations</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside  mb-8">
            <li>C#</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Postgrsql</li>
            <li>Nextjs</li>
          </ul>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Below are projects that showcase my skills as a Full Stack Software Developer</p>
          </div>
      </div>
  
      <div className="flex flex-wrap justify-center items-center">

        <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Todo Application</h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700"> An Application to  plan out your tasks
          so that they are all accomplished .</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium 
                text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300">
                <Link href="/todo">View Project</Link>   
          </button>
        </div>

       <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Review Application</h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700">An Application to provide users a way to leave reviews 
          on specific resturants they have visited</p>
          <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
          bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" 
          onClick={() => router.push('/resturant')}>
            View Project
          </button>
        </div>
    
      </div>
    </div>
  )
}
