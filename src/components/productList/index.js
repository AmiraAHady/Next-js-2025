import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import styles from '@/components/header/header.module.css'
import { getAllProducts } from '@/app/_lib/data-service';


const ProductList = async() => {
   const{data:products}=await getAllProducts()
   
  return (
    <>
     {products.map((prod) => (
      <Link key={prod.id} href={`/products/${prod.id}`} >
        <div  className="col">
          <div className="card">
           <Image src={prod.image} width={300} height={300} alt="product image" layout="responsive" />
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">{prod.price}$
              </p>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </>
  )
}

export default ProductList