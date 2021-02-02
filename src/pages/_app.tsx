import React from "react";
import { AppProps } from "next/app";
import UserProvider from "@/context/userContext";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
