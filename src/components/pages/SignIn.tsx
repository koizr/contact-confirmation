import React, { useState } from "react";
import { useRouter } from "next/router";
import { signin } from "@/auth";
import Link from "@/components/atoms/Link";
import WithBackButton from "@/components/templates/WithBackButton";

const SignIn: React.FC = () => {
  // TODO: サインイン済みなら Home に遷移
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const onClickSignIn = () => {
    if (email && password) {
      signin(
        email,
        password,
        () => router.push("/"),
        (reason) => setMessage(reason.message)
      );
    } else {
      setMessage("validation error");
    }
  };

  return (
    <WithBackButton title="Sign in" back={() => router.back()}>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button onClick={onClickSignIn}>Sign in</button>
      </div>
      <p>{message}</p>
      <div>
        <Link href="/signup" passHref>
          Sign up
        </Link>
      </div>
    </WithBackButton>
  );
};

export default SignIn;
