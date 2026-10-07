
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Autoplay } from 'swiper/modules';
import img1 from '../src/assets/Gemini_Generated_Image_7hy7cv7hy7cv7hy7 (2).png'
import img2 from '../src/assets/Gemini_Generated_Image_7hy7cv7hy7cv7hy7 (3).png'
import img4 from '../src/assets/Gemini_Generated_Image_7hy7cv7hy7cv7hy7 (4).png'
import img3 from '../src/assets/Gemini_Generated_Image_7hy7cv7hy7cv7hy7 (5).png'
import { useEffect, useState } from 'react';
import { GetAllCategry } from './catagery/GetCatagery';
import { GetsingleCategry } from './catagery/getSingleCat';
import { Link  } from 'react-router-dom';
import Product from './comp2/Product';
import { motion } from "framer-motion";

export default function Home() {
  const [ALLCate ,SetALLCate] =useState([])
     ///hadel get prods
     async function handellResp(){
       const mmx= await  GetAllCategry();
       SetALLCate(mmx)
   
  
      
     }
     ///////////

     /////////
      useEffect(()=>{
          handellResp()
  
      },[])
      console.log('cate' ,ALLCate )
   
   
  return (<>
 

    <div className='bg-white pt-12'>

      <div className="w-full max-w-4xl mx-auto p-4">
      <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay:5000
      }}
        spaceBetween={50}       // المسافة بين كل سلايد والآخر (بالبكسل)
        slidesPerView={1}        // عدد السلايدات الظاهرة في نفس الوقت
        onSlideChange={() => console.log('Slide changed!')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide >
         <img src= {img2} alt="" />
          </SwiperSlide>

              <SwiperSlide >
         <img src= {img1} alt="" />
          </SwiperSlide>

              <SwiperSlide >
         <img src= {img4} alt="" />
          </SwiperSlide>

              <SwiperSlide >
         <img src= {img3} alt="" />
          </SwiperSlide>

      </Swiper>
    </div>  
     
     <div className='m-4'>
      
  <div className="w-[90%] mx-auto overflow-x-hidden bg-chart-1">
  <motion.div
    className="flex w-max whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <p className="text-chart-3 text-3xl px-8">
      Shop Now&nbsp;&nbsp; Shop Now&nbsp;&nbsp; Shop Now&nbsp;&nbsp; Shop Now
    </p>

    <p className="text-chart-3 text-3xl px-8">
      Shop Now&nbsp;&nbsp; Shop Now&nbsp;&nbsp; Shop Now&nbsp;&nbsp; Shop Now
    </p>

    <p className="text-chart-3 text-3xl px-8">
      Shop Now&nbsp;&nbsp; Shop Now&nbsp;&nbsp; Shop Now&nbsp;&nbsp; Shop Now
    </p>
  </motion.div>
</div>
     
     
       <Product />    
     </div>
       
    </div>
    <div className='bg-chart-1'>
         <p className='text-6xl text-center pb-5  text-chart-3'> Catagery</p>

    <div className='flex flex-wrap'>
    {ALLCate?.map((cat)=>

    <div className='w-1/2 md:w-1/3  '  >
    <div className='m-5 border-2 p-4 rounded-lg bg-white shadow'>

    
      <img className='w-40 h-40 m-auto' src={cat.image} alt="" />
      <p className='text-center text-chart-3 text-3xl'>{cat.name}</p>
     
     </div>
    </div>
    

    )}
    </div>
    </div> 
    
     
            


     </>

    
  )
}
