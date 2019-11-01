import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

// workaround broken Link with next-css
// https://github.com/zeit/next-plugins/issues/282
import ActiveLink from "./active-link";

import UserContext from "./user-context";
import { withTranslation } from "../i18n";

class Navigation extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
  }

  toggleLang() {
    const { toggleLang } = this.context;
    toggleLang();
  }

  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <ActiveLink href="/" activeClassName="none">
              <Nav.Link role="button">{this.props.t("common:nav.item1")}</Nav.Link>
            </ActiveLink>
            <ActiveLink href="/about" activeClassName="none">
              <Nav.Link role="button">{this.props.t("common:nav.item2")}</Nav.Link>
            </ActiveLink>
          </Nav>
          <div>
            <a
              className="m-btn m-btn-md m-btn-theme2nd m-btn-round m-btn-shadow"
              role="button"
              onClick={this.toggleLang.bind(this)}
              style={{ cursor: "pointer" }}
            >
              {this.context.lang === "fr" ? (
                <img src="img/flags/fr.svg" title="lang" alt="lang" style={{ width: "24px" }} />
              ) : (
                <img src="img/flags/en.svg" title="lang" alt="lang" style={{ width: "24px" }} />
              )}
            </a>
          </div>
        </Navbar>
      </>
    );
  }
}
export default withTranslation("common")(Navigation);
