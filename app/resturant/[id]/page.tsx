import { Resturant } from '@/app/lib/definitions'
import React from 'react'
import * as PostApi from  "@/app/lib/actions"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ListReview } from '@/app/components/listReview'

type Params  = {
    params: {
        id: number
    }
}



export default async function ReviewDetails({params: {id}}: Params) {

   const userData: Promise<Resturant> = PostApi.GetResturant(id)

   const user = await userData

    const deleteReview = async (id: number) => {
        "use server";
        await PostApi.DeleteReview(id);
        revalidatePath('/resturant');
        redirect('/resturant');
    };
    
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow items-center pt-16 pr-16 pb-8 pl-16  m-auto z-2">
            <ListReview key={user.id} userrest={user} deleteReview ={deleteReview } />       
        </div>
        
    )
}
