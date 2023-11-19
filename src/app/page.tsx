"use client";
import { useProductsQuery } from "@/redux/api/productApi";
import React from "react";
import LoadingPage from "./loading";
import ProductCard from "@/components/Product/ProductCard";

const HomePage = () => {
  const { data, isLoading } = useProductsQuery(undefined);

  if (isLoading) return <LoadingPage />;

  console.log(data);

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {data &&
          data?.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
