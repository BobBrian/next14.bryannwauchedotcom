import { Resturant } from '@/app/lib/definitions'
import React from 'react'
import * as PostApi from  "@/app/lib/actions"
import { revalidatePath } from 'next/cache'
import { ListReview } from '@/app/components/listReview'

type Params  = {
    params: {
        id: number
    }
}

type Resturants = Array <Resturant>

export default async function ReviewDetails({params: {id}}: Params) {

   const user : Resturants = await PostApi.GetResturant(id);

    const deleteReview = async (id: number) => {
        "use server";
        if(window.confirm('Are You Sure you want to delete this entry')){
          await PostApi.DeleteReview(id);
          revalidatePath("/resturant");
        } 
    };
    
    return (
        <>
            {user.map(userrest =>(
                <div  className="max-w-sm bg-white border border-gray-200 
                rounded-lg shadow items-center pt-16 pr-16 pb-8 pl-16  m-auto z-2">
                    <ListReview key={userrest.id} userrest={userrest} deleteReview ={deleteReview } />
                
                </div>
            ))};
            
        </>
      )
}
