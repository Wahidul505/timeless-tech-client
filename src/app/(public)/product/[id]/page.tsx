"use client";
import LoadingPage from "@/app/loading";
import Heading from "@/components/Heading/Heading";
import { useSingleProductQuery } from "@/redux/api/productApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductDetails = ({ params }: { params: any }) => {
  const id = params.id;
  const router = useRouter();
  const { data, isLoading } = useSingleProductQuery(id);

  if (isLoading) return <LoadingPage />;
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="primary-bg lg:relative w-3/4 h-full lg:h-96 rounded flex flex-col items-center lg:block">
        <Image
          src={data?.image}
          alt=""
          width={500}
          height={500}
          className="w-full h-96 lg:h-96 lg:w-96 static lg:absolute lg:top-16 lg:-left-32 lg:shadow-lg rounded"
        />
        <div className=" pb-4 lg:pl-72 lg:pt-16 pt-4">
          <Heading label="Buy" subLabel={data?.title} theme="dark" />
          <div className="text-white md:text-xl">at ${data?.price}</div>
          <button
            onClick={() => router.push(`/checkout/${data?._id}`)}
            className="secondary-bg text-white h-12 md:text-xl font-normal rounded cursor-pointer border-none mt-6 px-4"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
