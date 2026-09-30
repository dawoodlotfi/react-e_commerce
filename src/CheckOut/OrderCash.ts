
import axios from "axios";
import type { valuesCheckOut } from "./types";

export async function OrderCash(idcart:string,detalis:valuesCheckOut){
   try {
     const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${idcart}`,{

         shippingAddress: {detalis}
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