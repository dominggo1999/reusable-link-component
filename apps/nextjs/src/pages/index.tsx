import React from "react";
import Head from "next/head";
import AuthStatus from "components/AuthStatus";
import { Card, Link, Button } from "@acme/ui";

const Home = () => {
  return (
    <>
      <Head>
        <title>my-t3-boilerplate</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid grid-cols-3 gap-x-10">
          <Card />
          <Card />
        </div>
        <div>
          <Button component={Link} href="/auth">
            Testo Autho
          </Button>
        </div>
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">my-t3-boilerplate</h1>
          <AuthStatus />
        </div>
      </main>
    </>
  );
};

export default Home;
