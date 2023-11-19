"use client";
import LoadingPage from "@/app/loading";
import Heading from "@/components/Heading/Heading";
import { useSingleOrderQuery } from "@/redux/api/orderApi";
import { useSingleProductQuery } from "@/redux/api/productApi";
import Image from "next/image";
import React from "react";

const SuccessPage = ({ params }: { params: any }) => {
  const id = params.id;
  const { data, isLoading } = useSingleOrderQuery(id);
  const { data: productData, isLoading: isProductLoading } =
    useSingleProductQuery(data?.product);

  if (isLoading || isProductLoading) return <LoadingPage />;
  console.log(data);
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="primary-bg lg:relative w-3/4 h-full lg:h-96 rounded flex flex-col items-center lg:block">
        <Image
          src={productData?.image}
          alt=""
          width={500}
          height={500}
          className="w-full h-96 lg:h-96 lg:w-96 static lg:absolute lg:top-16 lg:-left-32 lg:shadow-lg rounded"
        />
        <div className="  pb-4 lg:pl-72 lg:pt-16 pt-4 ">
          <Heading
            label={`Ordered ${productData?.title}`}
            subLabel="Successfully"
            theme="dark"
          />
          <div className="text-white md:text-xl">
            <span className="secondary-text">Name: </span>
            <br />
            {data?.name}
          </div>
          <div className="text-white md:text-xl">
            <span className="secondary-text">Phone: </span>
            <br />
            {data?.phone}
          </div>
          <div className="text-white md:text-xl">
            <span className="secondary-text">Address: </span>
            <br />
            {data?.address}
          </div>
          <div className="text-white text-sm">
            <span className="secondary-text md:text-xl">Transaction ID: </span>
            <br />
            <span className="whitespace-pre-wrap">{data?.transactionId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
