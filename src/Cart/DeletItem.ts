
import axios from "axios";

export async function DeletItem(idProd:string){
   try {
     const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${idProd}`
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