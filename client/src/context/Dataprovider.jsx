import { createContext, useState } from "react";

export const Datacontext= createContext(null);

const Dataprovider= ({children})=>{
    const[account,setAccount]=useState ({name:"",username:""})

    return(
        <Datacontext.Provider value={{account,setAccount}}>
            {children}
        </Datacontext.Provider>
    )
}
export default Dataprovider