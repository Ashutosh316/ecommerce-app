import ProductAPI from "./api/productAPI";
import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import UserAPI from "./api/userAPI";




export const GlobalState = createContext()

export const DataProvider =({children}) => {

    const [token , setToken]=useState(false)
    const refershToken = async()=>{
        const res = await axios.get('/user/refresh_token')
        console.log("token",token)
        setToken(res.data.accesstoken)
    }

    useEffect(()=>{
        const firstLogin = localStorage.getItem("firstLogin")
        if(firstLogin) refershToken()
    },[])
    const state={
        token:[token , setToken],
        productsAPI:ProductAPI(),
        userAPI:UserAPI(token)
    }




    return(
        <GlobalState.Provider value ={state}>
            {children}
        </GlobalState.Provider>
    )
}