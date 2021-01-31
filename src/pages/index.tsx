import Head from "next/head";
import React from "react";
import { useRequireLogin } from "@/auth";

export default function Home(): JSX.Element {
  // Our custom hook to get context values
  const { loadingUser, user } = useRequireLogin();

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <Head>
        <title>Home - contact-confirmation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
      </main>
    </div>
  );
}
