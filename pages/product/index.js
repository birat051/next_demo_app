import React from 'react'
import Link from 'next/link'

function Product(productId=1) {
  const id=100
  return (
    <div>
      <h1>Product Page</h1>
      <h2><Link href={`/product/${id}`}>
      Product details for product {id}
      </Link>
      </h2>
      <h2><Link href={`/product/${id+1}`} replace>
      Product details for product {id+1}
      </Link>
      </h2>
    </div>
  )
}

export default Product