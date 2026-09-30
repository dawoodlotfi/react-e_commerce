
import axios from "axios";
import type { valuesCheckOut } from "./types";

export async function OrderOnline(idcart:string,detalis:valuesCheckOut){
   try {
     const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${idcart}?url=http://localhost:5173`,{

         shippingAddress: detalis
     }
        ,{
        headers:{
            token:localStorage.getItem('tokenDawoodWeb')
            
        }

     })
    
    return data
    
   } catch (error) {

    return error
    
   }
    

}