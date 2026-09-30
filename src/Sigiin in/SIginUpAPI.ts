import axios from "axios";
import type { SubmitValues } from "./types";

export async function SiginUpApi(UserData:SubmitValues){
  try {
      const {data} =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',UserData)
    return data
  } catch (error) {
    return error?.response?.data
  }
 
}