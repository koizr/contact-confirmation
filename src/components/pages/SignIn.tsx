import React, { useState } from "react";
import { useRouter } from "next/router";
import firebase from "@/firebase/clientApp";
import Template from "@/components/templates/SignIn";

const SignIn: React.FC = () => {
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
    <Template
      {...{
        email,
        onEmailChange: (event) => setEmail(event.target.value),
        password,
        onPasswordChange: (event) => setPassword(event.target.value),
        onClickSignIn: signin,
        message,
      }}
    />
  );
};

export default SignIn;
