import React, { useState } from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Controller, useForm} from "react-hook-form"
import type { SubmitValues } from './types'
import { zodResolver } from './../../node_modules/@hookform/resolvers/zod/src/zod';
import { schema } from './Schema'
import { SiginUpApi } from './SIginUpAPI'
import toast from 'react-hot-toast'
import Login from './../Login/Login';
import { Link } from 'react-router-dom'

export default function SiginIn() {
    let [errroResponse,SeterrroResponse]=useState(null)
/////
const form=useForm({
    defaultValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:'',
        
    },
    resolver:zodResolver(schema),
    mode:'onBlur'
    
})    
//////
async function handleSubmit(vaules:SubmitValues){
       const data = await SiginUpApi(vaules);

     console.log(data)
     if(data.message == "success"){
        ///login
        toast.success(data.message)
     }
     else(
        SeterrroResponse(data.message),
        toast.error(data.message)
     )
    
    }
  return (<>
  <div className='flex justify-center items-center pt-40'>

  
   <div className="py-12 w-3/4 mx-auto bg-chart-1  rounded-2xl  shadow-2xl shadow-blue-500/30">
    <p className="text-4xl font-bold text-chart-3 mb-6 tracking-wide drop-shadow-md">
        Sigin Up
    </p>
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
        <div className="w-3/4 mx-auto">
            <Controller
                name="name"
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
                            placeholder="Name"
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
                name="email"
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
                            placeholder="Email"
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
                name="password"
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
                            placeholder="Password"
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
                name="rePassword"
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
                            placeholder="RePassword"
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
                            placeholder="Phone"
                            autoComplete="off"
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />
        </div>
  {errroResponse?<p className='text-2xl text-center'>{errroResponse}</p>:null}
  
        <div className="w-1/2 mx-auto pt-3">
            <button
                type="submit"
                className="bg-chart-3 text-black w-full py-3 px-6 rounded-xl font-semibold text-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/30"
            >
                submit
            </button>
        </div>
    </form>
    <div className='text-center pt-4'>
    <Link className='text-white ' to={'/login'}>login</Link>
    </div>
</div>

</div>
  </>
 
  )
}
