import { Link } from "react-router-dom";
import Catagery from './../catagery/Catagery';
import { useContext } from "react";
import { TokenContext } from "@/context/contextToken";
import { useQuery } from "@tanstack/react-query";
import { GetCart } from "@/Cart/GetCart";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar() {

     let {Token ,SetToken}   = useContext(TokenContext)
  console.log('nav' ,Token)
  ////log out
  function LogOut(){
    localStorage.removeItem('tokenDawoodWeb')
    SetToken(null)

  }
  ////////cart option
    let {data}=  useQuery({
    queryKey:['cart'] ,
    queryFn:GetCart ,
    

    })
   console.log(data)
   //////get wishlist
   let {data:ItemsLove} =useQuery({
       queryKey:['wishlist'],
       
   })
   console.log('dd',ItemsLove)

  return (<>
  <div className="bg-chart-1 flex flex-wrap items-center justify-around fixed w-full z-10">
    <div className="flex ju items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 m-2 text-chart-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
    <p className="text-3xl text-chart-3">Market Place</p>

    </div>
    <div className="flex flex-wrap justify-around text-chart-3">
      {Token?<div>
      <Link className="mx-3" to='/products'>Products</Link>
     
      </div> : <div>
       <Link className="mx-3" to='/singup'>Sing Up</Link>
      <Link className="mx-3" to='/login'>login</Link>
       </div>}
       {/*                  cart           */}
       {data?.numOfCartItems >0?<div>
         <Link to={'/cart'} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-chart-3 text-5xl size-9">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
       </svg>
       <div className="text-chart-3 text-center bg-white w-5 font-bold rounded-3xl absolute top-4"> {data?.numOfCartItems}</div>
       </Link>
       </div> :null}
       {/*                 drop down            */}
       <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
             {/*                 wishlist            */}
       <div>
        <div>
          <Link to={'/wishlist'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-chart-3 size-4">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg> wishlist
          </Link>

        </div>
       </div>
          </DropdownMenuItem>
          <DropdownMenuItem>orders</DropdownMenuItem>
          <DropdownMenuItem>
             {/*                logo out                */}
       {Token? <button onClick={LogOut} className="text-chart-5">log out</button>:null}
          </DropdownMenuItem>
        </DropdownMenuGroup>
       
      </DropdownMenuContent>
    </DropdownMenu>
      
       


      
      
      
      

      
    </div>



  </div>
  </>
  )
}
