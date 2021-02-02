import React from "react";
import Head from "./Head";
import Link from "@/components/atoms/Link";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type SignInProps = {
  email: string;
  onEmailChange: (event: ChangeEvent) => void;
  password: string;
  onPasswordChange: (event: ChangeEvent) => void;
  onClickSignIn: () => void;
  message: string;
};

const SignIn: React.FC<SignInProps> = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  onClickSignIn,
  message,
}) => (
  <>
    <Head title="Sign in" />
    <main>
      <h1>Sign in</h1>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={onEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={onPasswordChange} />
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
    </main>
  </>
);

export default SignIn;
