import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/${product._id}`)}
      className="h-96 w-96 overflow-hidden relative rounded bg-gray-300 m-4 md:m-8 lg:m-12 cursor-pointer hover:scale-105 transition-transform duration-500 ease-out shadow-md"
    >
      <Image
        src={product?.image}
        alt=""
        height={500}
        width={500}
        className="h-full w-full absolute top-0 right-0 left-0"
      />
      <div className="bg-black bg-opacity-20 absolute top-0 right-0 left-0 z-10 w-full h-full p-3 md:p-5">
        <div className="primary-text text-xl md:text-3xl">{product?.title}</div>
        <div className="accent-text md:text-xl mt-2">at ${product?.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
