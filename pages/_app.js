import { wrapper } from "../store/store";
import "../styles/index.css";
import App from "next/app";
import React, { useEffect } from "react";

class MyApp extends App {

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
      // <AuthProvider authenticated={authenticated}>
      //   <Component {...pageProps} />
      // </AuthProvider>
    );
  }
}
export default wrapper.withRedux(MyApp); 