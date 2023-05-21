import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import img from '../../public/shoe1.avif'

function ShoesPage() {
  return (
    <div>
        <Head>
            <title>Shoes List</title>
            <meta content='This is a page displaying different shoe products' name='description'></meta>
        </Head>
        <Image src={img} placeholder='blur' alt='red shoe by nike' height='500'/>
        {['2','3','4','5'].map((path)=>{
            return (
            <div key={path}>
            <Image  src={`/shoe${path}.jpg`} height='500' width='300' blurDataURL='/blur.jpg'/>
            </div>
            )
        })}
    </div>
  )
}



export default ShoesPage