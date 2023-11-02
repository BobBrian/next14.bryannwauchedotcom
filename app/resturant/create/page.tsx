import { AddNewReview } from '@/app/components/addnewReview'
import React from 'react'
import { revalidatePath } from 'next/cache';
import * as PostApi from  "@/app/lib/actions"


export default async function Page() {

  const postNewReview = async (authorname:string,resturantname:string, body:string) => {
    "use server";
    await PostApi.AddResturant(authorname, resturantname, body)
    revalidatePath("/resturant");
  };

  return (
    <div>
       <AddNewReview addNewRewview={postNewReview}/>
    </div>
  )
}
