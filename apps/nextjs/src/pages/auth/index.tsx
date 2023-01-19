import React from "react";
import { getServerSession } from "@acme/auth";
import { Button } from "@acme/ui";
import { BsDiscord } from "react-icons/bs";
import { signIn, getProviders } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";

import type { NextPage, InferGetServerSidePropsType } from "next";
import type { ValueType } from "@acme/type-utils";

const Auth: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ providers }) => {
  const authMutation = useMutation(["auth"], async (id: string) => {
    await signIn(id, {
      callbackUrl: "/",
    });
  });

  return (
    <div className="container mx-auto">
      <div className="mt-16 flex flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-4xl">👋 Welcome</h1>
        <div className="flex flex-col gap-y-3">
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <Button
                    key={provider.id}
                    onPress={() => authMutation.mutate(provider.id)}
                    icon={BsDiscord}
                    iconPosition="left"
                  >
                    Sign in with{" "}
                    <span className="capitalize"> {provider.name}</span>
                  </Button>
                );
              })}
            {authMutation.error && (
              <span className="text-red-500">Something Went Wrong!</span>
            )}
            <span className="mt-2 flex justify-center text-blue-700 underline">
              <Link href="/">Back to home</Link>
            </span>
          </>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  providers: ValueType<ReturnType<typeof getProviders>>;
}> = async (ctx: GetServerSidePropsContext) => {
  try {
    const session = await getServerSession(ctx);
    const providers = await getProviders();

    if (session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: { providers: providers },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};

export default Auth;
