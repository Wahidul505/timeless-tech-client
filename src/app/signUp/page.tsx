"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Heading from "@/components/Heading/Heading";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { useSignUpMutation } from "@/redux/api/userApi";
import { storeUserInfo } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [signUp] = useSignUpMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const result = await signUp({ ...data }).unwrap();

      if (!result) {
        toast.error("Something Went Wrong. Please try again later");
      } else {
        storeUserInfo({ accessToken: result });
        router.push("/");
        toast.success("Account Created");
      }
    } catch (error) {
      toast.error("Something Went Wrong. Please try again later");
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-1/2 lg:w-3/4 shadow-gray-300 shadow-xl rounded h-3/4 overflow-hidden">
        <div className="h-full hidden lg:block">
          <Image
            src="https://i.ibb.co/bmNPnsg/olena-bohovyk-1h-U7xh-Slsz-Q-unsplash.jpg"
            alt=""
            height={500}
            width={500}
            className="h-full w-full"
          />
        </div>
        <div className="p-8 md:p-12">
          <Heading label="Create" subLabel="an Account" />
          <Form submitHandler={handleSubmit} doReset={false}>
            <FormInput name="name" label="Name" />
            <FormInput name="email" label="Email Address" />
            <FormInput name="password" label="Password" type="password" />
            <PrimaryButton label="Signup" type="submit" />
            <Link href={"/signIn"} className="mt-4 secondary-text">
              Already have an Account?
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
