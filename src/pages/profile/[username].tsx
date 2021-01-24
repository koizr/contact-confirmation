import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { getProfileData } from "@/fetchData/getProfileData";
import type { Profile } from "@/firebase/types";

type Props = {
  data: {
    username: string;
    profile: Profile;
  };
};

export default function SSRPage({ data }: Props): JSX.Element {
  const { username, profile } = data;

  return (
    <div className="container">
      <Head>
        <title>Next.js w/ Firebase Client-Side</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Next.js w/ Firebase Server-Side</h1>
        <h2>{username}</h2>
        <p>{profile.message}</p>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  Props,
  { username: string }
> = async ({ params }) => {
  const username = params?.username;
  if (!username) {
    return { notFound: true };
  }
  const profile = await getProfileData(username as string);
  if (!profile) {
    return { notFound: true };
  }
  return { props: { data: { username, profile } } };
};
