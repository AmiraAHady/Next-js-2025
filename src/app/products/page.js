import ProductList from "@/components/productList";
import Image from "next/image";
import React, { Suspense } from "react";

const Page = async () => {

  return (
    <div className="container">
      <h2>here is List products </h2>
      <p>new Income</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Suspense
          fallback={
            <>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </>
          }
        >
          <ProductList />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
