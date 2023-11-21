import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Our_winnning = () => {
  return (
    <div>
      <div style={{ color: "red", marginBottom: "40px", marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>
          Our Winning
          <span style={{ color: "red" }}> Formula</span>
        </h3>
        <h3>
          {" "}
          Services to<span style={{ color: "black" }}> for Edzorblaw</span>
          &nbsp;
          <i class="fa-solid fa-house  "></i>
        </h3>
      </div>
      <div className="one-all-container">
        <Container>
          <Row>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-solid fa-chart-simple fa-bounce"></i>Research &
                Analysis
              </h4>
              Our social media marketing agency can help you create a strong
              presence on Facebook through targeted ad campaigns, engaging
              content, and audience interaction.
            </Col>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-solid fa-check-double fa-bounce"></i>Planning
              </h4>
              We offer services to boost your Instagram presence with visually
              appealing content, ad campaigns, and influencer marketing.
            </Col>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-solid fa-check-double fa-bounce"></i>Execution
              </h4>
              We provide LinkedIn marketing services to help you reach the right
              audience, build credibility through thought leadership, and drive
              conversions.
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={5}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5 mr-md-5-all"
            >
              <h4>
                <i class="fa-solid fa-desktop fa-bounce"></i>Monitoring &
                Measuring
              </h4>
              We can optimize your Google My Business listing to improve your
              online visibility, attract potential leads, and increase your
              website traffic.
            </Col>
            <Col
              xs={12}
              md={5}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5mr-md-5-all"
            >
              <h4>
                <i class="fa-solid fa-bug fa-bounce"></i>Reporting &
                Optimization
              </h4>
              Our social media marketing agency can assist you in building a
              strong Twitter presence through engaging content, targeted ad
              campaigns, and strategic community engagement.
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Our_winnning;
