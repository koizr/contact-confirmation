import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import firebase from "firebase";

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const signin = () => {
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => router.push("/"))
        .catch((reason) => setMessage(reason.message));
    } else {
      setMessage("validation error");
    }
  };

  return (
    <div>
      <Head>
        <title>Sign in - contact-confirmation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sign in</h1>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={signin}>Sign in</button>
        </div>
        <p>{message}</p>
        <div>
          <Link href="/signup" passHref>
            <a>Sign up</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
