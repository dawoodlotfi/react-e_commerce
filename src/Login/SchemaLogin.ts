import * as zod from "zod"

export const SchemaLogin = zod.object({
  
    email:zod.string().nonempty('enter email')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email')
,
    password:zod.string().nonempty('enter password')
    
  })