import React from "react";
import Head from "next/head";

function CustomHead({ children, title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {children}
    </Head>
  );
}

export default CustomHead;
