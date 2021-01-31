import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import firebase from "firebase";

export default function Login(): JSX.Element {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const signout = async () => {
    try {
      await firebase.auth().signOut();
      router.push("/");
    } catch (e) {
      setMessage(e.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Sign out - contact-confirmation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sign out</h1>
        <div>
          <button onClick={signout}>Sign out</button>
        </div>
        <p>{message}</p>
      </main>
    </div>
  );
}
