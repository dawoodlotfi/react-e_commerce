
import axios from "axios";

export async function RemoveItems(productId:string){
   try {
     const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
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