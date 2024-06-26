import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Style.css";

const Home: React.FC = () => {
  return (
    <section>
      <Container fluid className="home-section home-container" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> mohamed bouraoui</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
