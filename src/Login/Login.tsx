import React, { useContext } from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Controller, useForm} from "react-hook-form"
import { zodResolver } from './../../node_modules/@hookform/resolvers/zod/src/zod';
import { SchemaLogin } from './SchemaLogin'
import type { LoginValues } from './types copy';
import { LoginApi } from './LoginApi';
import { toast } from 'react-hot-toast';
import { TokenContext } from '@/context/contextToken';
import { useNavigate } from 'react-router-dom';

export default function Login() {
const navagate=useNavigate()
   let {Token ,SetToken}   = useContext(TokenContext)
   console.log(Token)
  ////
  const form=useForm({
      defaultValues:{
     
      email:'',
      password:'',
     
          
      },
      resolver:zodResolver(SchemaLogin),
      mode:'onBlur'
      
  })  
  ////////
  async function handelLogin(values:LoginValues){
const req = await LoginApi(values)
if(req.message === 'success'){
  localStorage.setItem('tokenDawoodWeb',req.token)
  SetToken(req.token)

   toast.success(req.message)
   navagate('/')
}
else if(req.statusMsg == 'fail'){
  toast.error(req.message)

}
console.log(req) 
  }
  return (
    <div className='flex justify-center items-center pt-44'>
          <div className="w-3/4 mx-auto bg-chart-1  rounded-2xl  shadow-2xl shadow-blue-500/30 pt-24">
        <p className="text-4xl font-bold text-chart-3 mb-6 tracking-wide drop-shadow-md">
            Sigin Up
        </p>
        <form onSubmit={form.handleSubmit(handelLogin)} className="space-y-5">
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
                                placeholder="email"
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
                                placeholder="password"
                                autoComplete="off"
                                type='password'
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </div>
    
          
    
            
    
            
            <div className="w-1/2 mx-auto pt-3">
                <button
                    type="submit"
                    className="bg-chart-3 text-black w-full py-3 px-6 rounded-xl font-semibold text-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/30"
                >
                    submit
                </button>
            </div>
        </form>
    </div>
    
    </div>
    
  )
}
