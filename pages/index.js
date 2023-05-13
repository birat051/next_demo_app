import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Home() {
  const router=useRouter()
  const clickHandler=(event)=>{
    event.preventDefault()
    router.push('/product')
  }
  const showDocs=(event)=>{
    event.preventDefault()
    router.push('/docs/1/2')
  }
  return (
    <div>
    <h1>HomePage</h1>
    <button onClick={clickHandler}>
      Show Products
    </button>
    <button onClick={showDocs}>
      Show Documents
    </button>
    <Link href='/posts'>
      <h1>Posts</h1>
    </Link>
    </div>
  )
}

export default Home