import React,{useContext,createContext} from "react";
const Usercontext=createContext();
export const UserProvider =({children})=>{
    const user={name:"Jhone",age:"32"};
    return <Usercontext.provider value={user}>{children}</Usercontext.provider>
};
export const useUser=()=>{
    return useContext(Usercontext);
}

