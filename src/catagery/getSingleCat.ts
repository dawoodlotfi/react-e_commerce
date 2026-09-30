import axios from "axios";

export async function GetsingleCategry(id:string){
    const resp = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
       
    console.log(resp);
    return resp.data
    

}