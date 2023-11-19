"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Heading from "@/components/Heading/Heading";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import { useSignInMutation } from "@/redux/api/userApi";
import { storeUserInfo } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const [signIn] = useSignInMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const result = await signIn({ ...data }).unwrap();

      if (!result) {
        toast.error("Wrong User Credentials");
        return;
      }
      if (result) {
        storeUserInfo({ accessToken: result });
        router.back();
        toast.success("Logged in");
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
            src="https://i.ibb.co/FxJvCny/klim-musalimov-WS9-ZISdq3-ZM-unsplash-1-1.jpg"
            alt=""
            height={500}
            width={500}
            className="h-full w-full"
          />
        </div>
        <div className="p-8 md:p-12">
          <Heading label="Login" subLabel="to your Account" />
          <Form submitHandler={handleSubmit} doReset={false}>
            <FormInput name="email" label="Email Address" />
            <FormInput name="password" label="Password" type="password" />
            <PrimaryButton label="Signin" type="submit" />
            <Link href={"/signUp"} className="mt-4 secondary-text">
              New to our website?
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
