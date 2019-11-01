import React from "react";

import Head from "../components/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Cards from "../components/cards";

import { withTranslation } from "../i18n";

class Home extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ["common"]
    };
  }

  render() {
    return (
      <>
        <Head title="i18n-Nextjs-fastify" />
        <Navigation />
        <main>
          <Banner />
          <Cards />
        </main>
        <Footer />
      </>
    );
  }
}

export default withTranslation("common")(Home);
