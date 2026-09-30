import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { GetWishlist } from './GetWishlist'
import { RemoveItems } from './removewish'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export default function WishList() {


    ///////get wishlist

let {data:ItemsLove} =useQuery({
    queryKey:['wishlist'],
    queryFn:GetWishlist,
})
//////////remove
const query =useQueryClient()

let{mutate:removeWislist,data:reqRmove, error:mm}=useMutation({
    mutationFn: (id:string) => {
    return RemoveItems(id);
  },
  onSuccess:(reqRmove)=>{
    if(reqRmove.status =='success'){
      console.log(reqRmove)
      toast.success(reqRmove.message)
      query.invalidateQueries({
        queryKey:['wishlist']
      })

    }
   
    
  },
  onError:(mm)=>{
    console.log(mm)

  }
}) 

console.log('wishlist',ItemsLove)
  return (
    <div className="pt-12 px-4">
  <p className="text-chart-3 text-center text-2xl font-bold mb-6">WishList</p>

  {ItemsLove?.count > 0 ? (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
      {ItemsLove?.data?.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 bg-white shadow-sm border border-chart-3 rounded-2xl px-5 py-4"
        >
          <Link
            to={`/productdetalis/${item.id}`}
            className="flex-1"
          >
            <p className="text-lg font-semibold text-gray-800">
              {item.category.name}
            </p>
            <p className="text-chart-3 font-bold mt-1">
              {item.price} EGP
            </p>
          </Link>

          <button
            onClick={() => removeWislist(item.id)}
            className="p-2 rounded-full hover:bg-red-50 transition"
            aria-label="Remove from wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-chart-5 size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500 mt-10 text-lg">
      Your wishlist is empty 🛒
    </p>
  )}
</div>
  )
}
