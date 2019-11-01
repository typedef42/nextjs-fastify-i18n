import React from "react";

import Head from "../components/head";
import Navigation from "../components/navigation";

import { withTranslation } from "../i18n";

class About extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ["common"]
    };
  }

  render() {
    return (
      <>
        <Head title="i18n-Nextjs-fastify about" />
        <Navigation />
        <div>
          <p>{this.props.t("common:about.text")}</p>
        </div>
      </>
    );
  }
}

export default withTranslation("common")(About);
