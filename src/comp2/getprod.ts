
import axios from "axios";

export async function GetAllProd(){
    const resp = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    console.log(resp);
    return resp.data.data
    

}