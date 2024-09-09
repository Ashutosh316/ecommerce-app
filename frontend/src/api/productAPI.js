import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductAPI =()=>{

    const [products , setProducts]=useState([])

    const getProducts = async()=>{
        try {
            const res = await axios.get('/api/products'); // Using relative path
            console.log(res.data.products);
             setProducts(res.data.products);
          } catch (error) {
            console.error('Error fetching products:', error);
           
          }
        };

    useEffect(()=>{
        getProducts()
    },[])
    return{
        products : [products,setProducts]
}
}

export default ProductAPI