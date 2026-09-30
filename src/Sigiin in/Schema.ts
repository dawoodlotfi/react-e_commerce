import * as zod from "zod"

export const schema = zod.object({
  
    name: zod.string().nonempty('enter name'),
    email:zod.string().nonempty('enter email')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email')
,
    password:zod.string().nonempty('enter password'),
    rePassword:zod.string().nonempty('enter repassword'),
    phone:zod.string().nonempty('enter your phone').regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/ , 'invalid egyption number') ,
    
  }).refine((data)=>data.password === data.rePassword , {path:['rePassword'] , message:'in Valid repassword'})