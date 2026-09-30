import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { GetCart } from './GetCart'
import Product from './../comp2/Product';
import { DeletItem } from './DeletItem';
import toast from 'react-hot-toast';
import { query } from '@/App';
import { ClearCart } from './ClearCart';
import { UpdataCart } from './updataCart';
import { Link } from 'react-router-dom';

export default function Cart() {

/////get cart item
  let {data}=  useQuery({
    queryKey:['cart'] ,
    queryFn:GetCart ,
    

    })
    console.log(data)
    /////////delet item 
    const query =useQueryClient()
    let {mutate:deletItem ,data:req}=useMutation({
      mutationFn:(id:string)=> DeletItem(id) ,

      onSuccess:(req)=>{
        console.log(req)
        toast.success('deleted done')
        query.invalidateQueries({
          queryKey:['cart']
        })
      }
    })
    ///////Updata cart
    
   
    let {mutate:Updata }=useMutation({
      mutationFn: UpdataCart,

      onSuccess:()=>{
        toast.success('updata done')
         query.invalidateQueries({
          queryKey:['cart']
        })
      }
    })
     function handelUpdata(idProd: string, num: number) {
      Updata({
       idProd,
      num,
     })
    }
    /////////clear all cart

      
    let {mutate:clearall }=useMutation({
      mutationFn: ClearCart ,

      onSuccess:()=>{
        
        toast.success('cleared all')
        query.invalidateQueries({
          queryKey:['cart']
        })
      }
    })



        console.log(req)
        console.log('cart' ,data)





  return (<>
      <div className="w-[90%] mx-auto rounded-2xl pt-12 pb-10">
      {/* عنوان السلة */}
      <p className="text-4xl text-center font-bold text-chart-3 mb-8 tracking-wide">
        Cart
      </p>

      {data?.numOfCartItems > 0 ? (
        <div className="flex flex-col gap-6">
          {/* زر حذف الكل */}
          <div className="flex justify-evenly items-center">
            <button
              onClick={() => clearall()}
              className="bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white font-semibold rounded-2xl px-8 h-11 shadow-md hover:shadow-lg"
            >
              Clear Cart All
            </button>
             {/**check out and total price */}
            <div className='border rounded-2xl w-1/2 border-chart-3 mt-3 flex justify-evenly items-center'>
                <p className='text-2xl text-chart-1 pl-3'>total Price :
               <span className='text-2xl text-chart-4'>{data?.data?.totalCartPrice} EGP</span></p>
               <Link 
               className='pl-3 bg-chart-4 rounded-2xl my-4 text-center w-1/4 h-[40px]' 
               to={`/checkOut/${data.cartId}`}>
              Check Out
              </Link>

              </div>
            
          </div>

          {/* قائمة المنتجات */}
          {data?.data?.products.map((prod) => (
            <div>
            <div
              key={prod.product._id}
              className="w-full flex flex-wrap gap-4 p-4 border-2 border-chart-1/40 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* صورة المنتج */}
              <div className="w-[35%]  border-chart-1 border-4 rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={prod.product.imageCover}
                  alt={prod.product.title}
                />
              </div>

              {/* تفاصيل المنتج */}
              <div className="flex-1 border-chart-1 border-4 rounded-2xl flex flex-col justify-evenly gap-3 p-4">
                <p className="font-semibold text-lg text-center">
                  {prod.product.title}
                </p>
                  <p className="text-center text-xl font-bold">
                  {prod.product.brand.name} <span className="text-chart-3 text-base"></span>
                </p>
              
                <p className="text-center text-xl font-bold">
                  {prod.price} <span className="text-chart-3 text-base">EGP</span>
                </p>

                {/* التحكم في الكمية */}
                <div className="flex justify-center items-center gap-6">
                  <button
                    onClick={() => handelUpdata(prod.product._id, prod.count + 1)}
                    className="bg-chart-3 hover:bg-chart-3/80 transition-colors text-white rounded-full w-11 h-11 flex items-center justify-center text-2xl font-bold shadow-sm"
                  >
                    +
                  </button>

                  <p className="text-2xl font-bold min-w-[40px] text-center">
                    {prod.count}
                  </p>

                  <button
                    onClick={() => handelUpdata(prod.product._id, prod.count - 1)}
                    className="bg-chart-3 hover:bg-chart-3/80 transition-colors text-white rounded-full w-11 h-11 flex items-center justify-center text-2xl font-bold shadow-sm"
                  >
                    -
                  </button>
                </div>

                {/* زر الحذف */}
                <div
                  onClick={() => deletItem(prod.product._id)}
                  className="flex justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="text-red-600 size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </div>
              
            </div>
           
            </div>
            
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-chart-3/50 size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <p className="text-center text-3xl font-bold text-gray-400">
            No items in cart
          </p>
        </div>
      )}
    </div>
  





  </>
   
  )
}
