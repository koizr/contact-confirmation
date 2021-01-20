import React from "react";
import UserProvider from "@/context/userContext";
import { AppProps } from "next/app";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
