import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetSingleProdd } from './getSingleProdApi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { AddTOCart } from '@/Cart/AddTOCart'

import { useMutation, useQueryClient} from '@tanstack/react-query'
import toast from 'react-hot-toast';
import { query } from './../App';
import { AddWishlist } from '../wishList/AddWishlist';
import { RemoveItems } from '../wishList/removewish';


export default function SingleProd() {
  const query =useQueryClient()
  const navagate =useNavigate()
  
 //// get id single prod   
const {id}= useParams()
////use state prod
let[SingleProd,SetSingleProd]=useState(null)


//////function single prod
async function CallSingleProd(){
 const req= await GetSingleProdd(id)
 SetSingleProd(req.data)

 
}
/////ADD TO CART


let {mutate:addcart,data}=useMutation({
 mutationFn:(id) => AddTOCart(id),
 onSuccess:(data)=>{
  if(data.message == 'Request failed with status code 401'){
    navagate('/singup')
    toast('sigin IN Frist!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
    
  }
  if(data.status == 'success'){
    toast.success(data.message)

  }
  console.log(data.message)  
  query.invalidateQueries({
    queryKey:['cart'],
  })


 },
 onError:(data)=>{
toast.error(data.message)
console.log(data.message)  
 }
})

////call function single prod
useEffect(()=>{
  CallSingleProd()

},[])

console.log(data)
///////       Add  wishlist //////////
let[wisglist ,setwisglist]  =useState(true)
let{mutate:addWislist, data:aa,error}=useMutation({
    mutationFn: (id) => {
    return AddWishlist(id);
  },
  onSuccess:(aa)=>{
    if(aa.status=='success'){
       setwisglist(false)
      console.log(aa)
      toast.success(aa.message)
      query.invalidateQueries({
        queryKey:['cart']
      })

    }
   
    
  },
  onError:(error)=>{
    console.log(error)

  }
})       

///////       remove  wishlist //////////

let{mutate:removeWislist, data:reqRmove,error:mm}=useMutation({
    mutationFn: (id) => {
    return RemoveItems(id);
  },
  onSuccess:(reqRmove)=>{
    if(reqRmove.status='success'){
       setwisglist(true)
      console.log(reqRmove)
      toast.success(reqRmove.message)

    }
   
    
  },
  onError:(mm)=>{
    console.log(mm)

  }
})       


  return (<>
  <div className='  flex flex-col sm:flex-row justify-center items-centermt-32'>
      <div className='w-[90%] mx-auto md:w-[40%] ' >
 <Swiper
      modules={[Autoplay ,Navigation]}
      autoplay={{
        delay:5000
      }}

        navigation
        spaceBetween={50}       // المسافة بين كل سلايد والآخر (بالبكسل)
        slidesPerView={1}        // عدد السلايدات الظاهرة في نفس الوقت
        onSlideChange={() => console.log('Slide changed!')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SingleProd?.images?.map((image)=><SwiperSlide className='bg-gray-400' >
         <img src= {image} alt="" />
          </SwiperSlide>)}
        

              

      </Swiper>

      </div>
    <div className='  w-[60%] mx-auto md:w-[90%] flex flex-col justify-center items-start ms-5'>
     <p className='text-3xl text-chart-1'>{SingleProd?.title}</p>
     <p className='text-2xl text-chart-1'>{SingleProd?.brand.name}</p>
     <p className='text-3xl'><span className='text-chart-3'>EGP</span>{SingleProd?.price}</p>
     <p>{SingleProd?.description}</p>



    <div className='text-start w-full '>

         <button onClick={()=>{addcart(SingleProd._id)}} className='rounded-2xl bg-chart-3  h-[50px] w-[80%] mx-auto flex items-center justify-center '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white text-3xl  size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className='px-2 text-white' >add cart</span> 
          </button>
          {/**wish  list */}
          {wisglist?<button onClick={()=>{addWislist(SingleProd._id)}} className='rounded-2xl bg-white border border-chart-1 mt-3   h-[50px] w-[80%] mx-auto flex items-center justify-center '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>

              <span className='px-2 text-chart-1' >add to wishlist</span> 
              </button>: 
          
          <button 
           onClick={()=>{removeWislist(SingleProd._id)}}
          
          className='rounded-2xl bg-white border border-chart-5 mt-3   h-[50px] w-[80%] mx-auto flex items-center justify-center '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-chart-5 size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
             </svg>


              <span className='px-2 text-chart-1' >remove WishList</span> 
          </button>}
         

    </div>


    </div>



  </div>
 
           

  </>
   
  )
}
9