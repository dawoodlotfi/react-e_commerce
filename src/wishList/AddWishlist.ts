
import axios from "axios";

export async function AddWishlist(productId:string){
   try {
     const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
         productId:productId
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