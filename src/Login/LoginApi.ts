import axios from "axios";
import type { LoginValues } from "./types copy";

export async function LoginApi(UserData:LoginValues){
  try {
      const {data} =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',UserData)
    return data
  } catch (error) {
    return error?.response?.data
  }
 
}