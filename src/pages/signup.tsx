import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import firebase from "firebase";
import { createUser } from "@/db/user";

export default function SignUp(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [message, setMessage] = useState("");
  const router = useRouter();
  const signup = () => {
    if (email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (credential) => {
          if (!credential.user) {
            throw Error("failed to sign up");
          }
          await createUser(credential.user.uid, {
            firstName,
            lastName,
            phoneNumber,
            groups: [],
          });
          router.push("/");
        })
        .catch((reason) => setMessage(reason.message));
    } else {
      setMessage("validation error");
    }
  };

  return (
    <div>
      <Head>
        <title>Sign up - contact-confirmation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sign up</h1>
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
          <label>First name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Last name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Phone number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={signup}>Sign up</button>
        </div>
        <p>{message}</p>
        <div>
          <Link href="/signin" passHref>
            <a>Sign in</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
