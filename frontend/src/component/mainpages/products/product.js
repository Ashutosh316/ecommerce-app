import React, { useContext } from 'react'
import { GlobalState } from '../../../globalstate'
import ProductList from '../utils/ProductLists/productList'

const Product = ()=>{
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin]=state.userAPI.isAdmin
    console.log(state)
    return (
        <div className='products'>      
          {
            products.map(product => {
              return <ProductList key={product._id} product={product} isAdmin={isAdmin}/>
            })
          }      
        </div>
      )
    }
    
    export default Product