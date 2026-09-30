
import { Controller, useForm } from 'react-hook-form'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import type { valuesCheckOut } from './types'
import { schemaCheckOut } from './SchemaCheckOut'
import { zodResolver } from './../../node_modules/@hookform/resolvers/zod/src/zod';
import { useParams } from 'react-router-dom'
import { OrderCash } from './OrderCash'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { OrderOnline } from './OrderOnline'
export default function CheckOut() {

    //////
    let {idcart }=useParams()
    console.log("idcart",idcart)    ///////
        
const form =useForm({
    defaultValues:{
        details: '',
        phone: '',
        city: ''
    },
    resolver:zodResolver(schemaCheckOut),
    mode:'onBlur' ,

})



//////////// pay cash
 let [online,setonline]=useState(true)
    async function paycash(id:string,valuespay:valuesCheckOut){
       const req=await OrderCash(id,valuespay)
       console.log("req" ,req)
    if(req?.status == 'success' ){
     toast.success('order done')
    }
    

}
//////////// pay online
   async function payOnline(id:string,valuespay:valuesCheckOut){
       const response=await OrderOnline(id,valuespay)
       console.log("response" ,response)
       if(response?.status == 'success' ){
        response.session.url
        window.location.href=response.session.url
    }
   

}


////////////
 function ValuesChecKout(values:valuesCheckOut){
    
 if(online){
    payOnline(idcart,values)

 }
 else{
      paycash(idcart,values)
 }
           //  
             

   
   
 }


  return (<>
     <div  className='flex justify-center items-center pt-44'>

    
     <div className="w-3/4 mx-auto bg-chart-1  rounded-2xl  shadow-2xl shadow-blue-500/30 pt-24  pb-24" >
          <p className="text-4xl text-center font-bold text-chart-3 mb-8 tracking-wide">
        Check Out
      </p>
      <div>
         <form onSubmit={form.handleSubmit(ValuesChecKout)} className="space-y-5">
            <div className="w-3/4 mx-auto">
                <Controller
                    name="details"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                htmlFor={field.name}
                                className="block text-sm font-medium text-white/90 mb-1"
                            >
                                
                            </FieldLabel>
                            <Input
                                className="bg-white w-full px-4 py-2.5 rounded-xl border-2 border-transparent focus:border-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="adresse"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>
    
            <div className="w-3/4 mx-auto">
                <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                htmlFor={field.name}
                                className="block text-sm font-medium text-white/90 mb-1"
                            >
                                
                            </FieldLabel>
                            <Input
                                className="bg-white w-full px-4 py-2.5 rounded-xl border-2 border-transparent focus:border-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="phone"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>

            <div className="w-3/4 mx-auto">
                <Controller
                    name="city"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel
                                htmlFor={field.name}
                                className="block text-sm font-medium text-white/90 mb-1"
                            >
                                
                            </FieldLabel>
                            <Input
                                className="bg-white w-full px-4 py-2.5 rounded-xl border-2 border-transparent focus:border-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="city"
                                autoComplete="off"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>
    
    
          
    
            
    
            
            <div className="w-3/4 mx-auto pt-3 flex justify-evenly items-center">
            <button
               onClick={()=>{setonline(false)}}
                    type="submit"
                    className="bg-chart-3 text-black w-full py-3 px-6 rounded-xl font-semibold text-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/30"
                >
                    pay cash
                </button>
            

                <button
                   onClick={()=>{setonline(true)}}
                    type="submit"
                    className="bg-chart-3 text-black w-full py-3 px-6 rounded-xl font-semibold text-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/30"
                >
                    pay online
                </button>
            </div>
        </form>
    </div>
      </div>
     </div>
    
    

  </>
 
  )
}
