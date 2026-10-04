import React, { useEffect, useState } from 'react'
import { GetAllProd } from './getprod'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { query } from '@/App';
import { AddTOCart } from '@/Cart/AddTOCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export default function Product() {


  const navagate =useNavigate()
    ///prod
   const [ALLProd ,SetALLProd] =useState([])
   ///hadel get prods
   async function handellItems(){
     const mmx= await  GetAllProd();
     SetALLProd(mmx)
 

    
   }
   ///////////add to cart
    const query =useQueryClient()

   let {mutate:addcart}=useMutation({
    mutationFn:(id:string) => AddTOCart(id),
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
          queryKey:['cart']
        })
   
   
    },
    onError:(data)=>{
   toast.error(data.message)
   console.log(data.message)  
    }
   })
   ////////
   
    useEffect(()=>{
        handellItems()

    },[])
    /////////
console.log('alls' ,ALLProd)

  return (<>
  <div className='flex flex-wrap w-[90%] m-auto pt-12'>
   
    {ALLProd?.map((prod)=> 
    <div className=' w-full sm:w-1/2 md:w-1/3 lg:w-1/4 '>
         <div className=' m-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 overflow-hidden'>
  
  {/* حافظت على w-5/6 m-auto، وضفت خلفية لطيفة وتأثير hover بسيط */}
 <Link to={`/productdetalis/${prod._id}`}>
  <div className=' p-6 flex bg-gray-100 justify-center items-center'>
    <img 
      className='w-5/6 m-auto  aspect-square object-contain hover:scale-105 transition-transform duration-300' 
      src={prod.imageCover} 
      alt={prod.title} 
    />
  </div>

  {/*   name          */}
  <div className='p-5 space-y-2'>
    <p className='  truncate font-bold text-chart-1'>
      {prod.title.split(' ').slice(0,3).join(' ')}
    </p>
    {/*   avarage        */}
  <div className=' flex items-center justify-start'>
   <div className=' flex items-center justify-start'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-8 h-8 text-chart-3'>
  {/*!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.*/}<path fill="rgb(255, 212, 59)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
</svg>

<span>  {prod.ratingsAverage} </span>
  </div>

<span>  {prod.ratingsAverage} </span>
  </div>
      
    <p  className='  truncate font-bold text-chart-1'>
      <span className='text-chart-3'>EGP  </span> 
      
      {prod?.priceAfterDiscount? 
      <span className='text-chart-1'>    {prod.priceAfterDiscount}</span>:
      <span className='text-chart-1'>    {prod.price}</span>}
      {prod?.price? 
      <span className='text-gray-400 line-through px-2' >
        {prod.price}</span>:null} 

    </p>



    
  </div>
  </Link>
</div>
    <div className='text-center '>
  

         <button onClick={()=>{addcart(prod._id) }} className='rounded-2xl bg-chart-1   h-[50px] w-[80%] mx-auto flex items-center justify-center '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-chart-3 text-3xl  size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className='px-2 text-white' >add cart</span> 
          </button>

    </div>


    </div>
 
)}
  </div>
 
  </>
  )
}
