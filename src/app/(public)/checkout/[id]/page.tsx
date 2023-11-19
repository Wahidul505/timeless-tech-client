"use client";
import LoadingPage from "@/app/loading";
import Heading from "@/components/Heading/Heading";
import { useSingleProductQuery } from "@/redux/api/productApi";
import Image from "next/image";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/Forms/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MbbiGK3RZZOQUDyUZ1d2gykge07mITkbVF0iRh562tKlCjuQqeUmkNtWtmVgLfAsU0jKWQzIZhJ5EbGbvwUNEkT009qHJz7lC"
);

const CheckoutPage = ({ params }: { params: any }) => {
  const id = params.id;
  const { data, isLoading } = useSingleProductQuery(id);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-1/2 lg:w-full shadow-gray-300 shadow-xl rounded h-3/4 overflow-hidden">
        <div className="h-full hidden lg:block">
          <Image
            src={data?.image}
            alt=""
            height={500}
            width={500}
            className="h-full w-full"
          />
        </div>
        <div className="p-8 md:p-12">
          <Heading label="Order" subLabel={data?.title} />
          <Elements stripe={stripePromise}>
            <CheckoutForm productId={id} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
