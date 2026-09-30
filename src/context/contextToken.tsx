import { createContext, useEffect, useState } from "react";

export const TokenContext = createContext<any>(null);

export function TokenContextProvider({children}){

    let [Token,SetToken]=useState(null)

    useEffect(()=>{
    if(localStorage.getItem('tokenDawoodWeb') != null){
        SetToken(localStorage.getItem('tokenDawoodWeb'))

     }
    },[])

    return <TokenContext.Provider value={{Token,SetToken}}>
{children}
    </TokenContext.Provider>

}
