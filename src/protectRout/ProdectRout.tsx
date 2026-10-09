import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProdectRout({children}:any) {

    if(localStorage.getItem('tokenDawoodWeb') != null){

        return children
    }
     else{
        return <Navigate to='/singup' />
     }

  return (
    <div>ProdectRout</div>
  )
}
