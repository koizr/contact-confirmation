import React from "react";
import { AppProps } from "next/app";
import { ApiContextProvider } from "@/api";
import UserProvider from "@/context/userContext";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApiContextProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </ApiContextProvider>
  );
}
