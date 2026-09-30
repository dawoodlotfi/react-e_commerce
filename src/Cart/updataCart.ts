
import axios from "axios";

export async function UpdataCart({idProd,num}:{idProd:string,num:number}){
   try {
     const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${idProd}`,{

         count: num
     }
        ,{
        headers:{
            token:localStorage.getItem('tokenDawoodWeb')
            
        }

     })
    console.log(data);
    return data
    
   } catch (error) {

    return error
    
   }
    

}