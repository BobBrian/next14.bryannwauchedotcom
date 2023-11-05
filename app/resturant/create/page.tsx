import { AddNewReview } from '@/app/components/addnewReview'
import React from 'react'
import * as PostApi from  "@/app/lib/actions"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Link from 'next/link';


export default async function Page() {

  const postNewReview = async (authorname:string,resturantname:string, body:string) => {
    "use server";
    await PostApi.AddResturant(authorname, resturantname, body)
    revalidatePath('/resturant');
    redirect('/resturant');
    
  };

  return (
    <div>
       <button className="mt-2 mb-6 inline-flex items-center px-3 py-2 text-sm font-medium 
        text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 ">
        <Link href="/resturant">Back to Home Page</Link>   
      </button>
       <AddNewReview addNewRewview={postNewReview}/>
    </div>
  )
}
