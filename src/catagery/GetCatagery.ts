
import axios from "axios";

export async function GetAllCategry(){
    const resp = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(resp);
    return resp.data.data
    

}