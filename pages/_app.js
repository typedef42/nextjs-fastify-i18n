import React from "react";
import App from "next/app";

import { UserProvider } from "../components/user-context";
import { appWithTranslation } from "../i18n";

class TestApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </>
    );
  }
}

export default appWithTranslation(TestApp);
