import React, { Component } from "react";
import Typed from "react-typed";
import { Jumbotron, Button } from "react-bootstrap";

import UserContext from "./user-context";
import { withTranslation } from "../i18n";

import "react-typed/dist/animatedCursor.css";

class Banner extends Component {
  static contextType = UserContext;

  state = {
    arrJumbo: [""]
  };

  constructor(props) {
    super(props);
  }

  updateTyped() {
    this.setState({
      arrJumbo: [
        this.props.t("common:banner.jumbotron.p1"),
        this.props.t("common:banner.jumbotron.p2"),
        this.props.t("common:banner.jumbotron.p3"),
        this.props.t("common:banner.jumbotron.p4")
      ]
    });
    this.typed.reset();
  }

  componentDidMount() {
    const { registerLangListener } = this.context;
    this.updateTyped();
    registerLangListener(this.updateTyped, this);
  }

  componentWillUnmount() {
    const { unregisterLangListener } = this.context;
    unregisterLangListener(this.updateTyped, this);
    this.setState({
      arrJumbo: []
    });
  }

  render() {
    return (
      <Jumbotron>
        <h1>
          {" "}
          <Typed
            typedRef={typed => {
              this.typed = typed;
            }}
            className="typelist-skill"
            strings={this.state.arrJumbo}
            typeSpeed={40}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </h1>
        <p>{this.props.t("common:banner.subtitle")}</p>
        <p>
          <Button variant="primary">{this.props.t("common:banner.button")}</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default withTranslation("common")(Banner);
