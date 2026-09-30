
import axios from "axios";

export async function GetSingleProdd(id:string){
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    console.log(data);
    
    return data
    

}