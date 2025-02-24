import { getProductById } from '@/app/_lib/data-service'
import React from 'react'


export async function generateMetadata({ params }) {
  const{data:product}=await getProductById(params.id)

  return {
    title: product.title,
  }
}


const Page= async({params}) =>{
    const{data:product}= await getProductById(params.id)
  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
    </div>
  )
}
export default Page;
