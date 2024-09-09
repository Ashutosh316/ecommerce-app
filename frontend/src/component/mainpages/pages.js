import React from "react";
import Product from "./products/product";
import Login from "./login/login";
import Register from "./login/register";
import Cart from "./cart/cart";
import {Route , Routes} from 'react-router-dom';
import DetailProduct from "./utils/detailsproduct/detailproduct";



const Pages =()=>{
    return(
        <Routes>
            <Route path='/' element={<Product/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
           <Route path='/detail/:id' element={<DetailProduct/>}/>
        </Routes>
    )
}
export default Pages
