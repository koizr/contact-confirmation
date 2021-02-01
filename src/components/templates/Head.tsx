import NextHead from "next/head";
import React from "react";

type Props = {
  title: string;
};

const Head: React.FC<Props> = ({ title }) => (
  <NextHead>
    <title>{title} - contact-confirmation</title>
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
