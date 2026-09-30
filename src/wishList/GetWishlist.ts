
import axios from "axios";

export async function GetWishlist(){
   try {
     const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`
       
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