"use client";
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Form from "./Form";
import FormInput from "./FormInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { usePlaceOrderMutation } from "@/redux/api/orderApi";
import { getUserInfo } from "@/services/auth.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IProps {
  productId: string;
}

const CheckoutForm = ({ productId }: IProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [placeOrder] = usePlaceOrderMutation();
  const { userEmail, userId } = getUserInfo() as {
    userEmail: string;
    userId: string;
  };
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    data.product = productId;
    data.user = userId;
    const result = await placeOrder(data).unwrap();
    if (!result) {
      toast.error("Fill up all the information");
    } else {
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      setErrorMessage(error?.message || "");

      const clientSecret = result?.transactionId;

      // to complete the payment
      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: result?.name,
              email: userEmail,
            },
          },
        });
      if (intentError) {
        setErrorMessage(intentError?.message as string);
      } else {
        toast.success("Your Order is Confirmed");
        router.push(`/success/${result?._id}`);
      }
    }
  };

  return (
    <div>
      <Form submitHandler={handleSubmit} center={false} doReset={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-4">
          <div className="mb-5">
            <div className="mb-1 text-sm md:text-base accent-text">Email</div>
            <input
              value={userEmail}
              disabled
              className="focus:outline-none md:text-lg p-2 w-full rounded border border-solid border-[#3c6e71] box-border accent-text"
            />
          </div>
          <FormInput
            name="name"
            label="Name"
            placeholder="Your Name"
            width="w-full"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-4">
          <FormInput
            name="phone"
            label="Phone Number"
            placeholder="Your Phone Number"
            width="w-full"
          />
          <FormInput
            name="address"
            label="Address"
            placeholder="Your Address"
            width="w-full"
          />
        </div>
        <CardElement
          className="border border-solid  border-[#3c6e71] rounded p-2 text-xl"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mt-2 ">{errorMessage}</p>
        )}
        <div className="mt-3 text-center">
          <PrimaryButton type="submit" label="Confirm Checkout" />
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
