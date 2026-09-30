import * as zod from "zod"

export const schemaCheckOut = zod.object({
  
     details: zod.string().nonempty('enter adress'),
      phone:zod.string().nonempty('enter your phone').regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/ , 'invalid egyption number') ,
      city: zod.string().nonempty('enter city')
    
  })