import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import { withTranslation } from "../i18n";

class Cards extends Component {
  render() {
    return (
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="img/thumb1.jpg" />
            <Card.Body>
              <Card.Title>{this.props.t("common:cards.c1.title")}</Card.Title>
              <Card.Text>{this.props.t("common:cards.c1.text")}</Card.Text>
              <Button variant="primary">{this.props.t("common:cards.c1.button")}</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="auto">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="img/thumb2.jpg" />
            <Card.Body>
              <Card.Title>{this.props.t("common:cards.c2.title")}</Card.Title>
              <Card.Text>{this.props.t("common:cards.c2.text")}</Card.Text>
              <Button variant="primary">{this.props.t("common:cards.c2.button")}</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="auto">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="img/thumb3.jpg" />
            <Card.Body>
              <Card.Title>{this.props.t("common:cards.c3.title")}</Card.Title>
              <Card.Text>{this.props.t("common:cards.c3.text")}</Card.Text>
              <Button variant="primary">{this.props.t("common:cards.c3.button")}</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default withTranslation("common")(Cards);
