import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import Home from "../components/Home";

const Layout = () => {
  return (
    <>
      <Head>
        <title>Tech Challenge</title>
        <meta
          name="description"
          content="Tech challenge for the Wild Code School"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default Layout;
