import { useRouter } from "next/router";

import React from 'react'

function ProductDetails() {
const router=useRouter()
const productName=router.query.id
  return (
    <div>
        <h1>Product Details for {productName} </h1></div>
  )
}

export default ProductDetails