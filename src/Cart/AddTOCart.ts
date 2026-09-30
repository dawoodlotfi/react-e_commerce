
import axios from "axios";

export async function AddTOCart(idProd:string){
   try {
     const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`
        ,{productId: idProd}
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