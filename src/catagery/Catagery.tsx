import React, { useEffect, useState } from 'react'
import { GetsingleCategry } from './getSingleCat'
import { useParams } from 'react-router-dom'

export default function Catagery() {
const { id } = useParams<{ id: string }>();
    console.log(id)
    ////////
    const[Prod , SetProd]=useState([])
    //////
   async function handelProd(){
       const xx= await GetsingleCategry(id)
       SetProd(xx)

    }
    useEffect(()=>{
        handelProd()
        


    } ,[])
    console.log(Prod)
  return (
    <div>Catagery</div>
  )
}
