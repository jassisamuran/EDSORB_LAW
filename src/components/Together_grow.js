import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Together_grow = () => {
  return (
    <div style={{}}>
      <div style={{ color: "white", marginBottom: "40px", marginTop: "20px" }}>
        <h3>
          TOGETHER WE
          <span> Formula</span>
        </h3>
        <h3>
          {" "}
          CAN GROW AND
          <span> MARKET YOUR BUSINESS!</span>
          &nbsp;
          <i class="fa-solid fa-house  "></i>
        </h3>
      </div>
      <div className="one-all-containers">
        <Container>
          <Row style={{ color: "white" }}>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se1 mr-md-5 mr-md-5-all wrap-text "
            >
              <h4>
                <i class="fa-solid fa-briefcase"></i>Quality Work
              </h4>
              for the past 8 years we have been delivering quality content
              writing services like blogs, articles and property descriptions to
              one of India's top real estate portals.
            </Col>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se1 mr-md-5 mr-md-5-all wrap-text"
            >
              <h4>
                <i class="fa-regular fa-clock"></i>Timely Response
              </h4>
              On average, we design and deliver approximately 12 to 15
              high-quality posts per day, ensuring that we meet the social media
              requirements of our clients promptly and effectively.
            </Col>
            <Col
              xs={12}
              md={3}
              style={{ marginBottom: "20px" }}
              className="se1 mr-md-5 mr-md-5-all wrap-text"
            >
              <h4>
                <i class="fa-solid fa-brain"></i> Creative Minds
              </h4>
              With expertise in using tools such as Canva, Photoshop, and other
              design software, our designers create eye-catching and engaging
              posts that leave a lasting impression. conversions.
            </Col>
          </Row>
          <Row style={{ color: "white" }}>
            <Col
              xs={12}
              md={5}
              style={{ marginBottom: "20px" }}
              className="se1 mr-md-5 mr-md-5-all wrap-text"
            >
              <h4>
                <i class="fa-solid fa-truck"></i> Proven Track
              </h4>
              Record We have clients who return after a gap of 6 months or more,
              showcasing the proven track record of our effectiveness and the
              trust they place in our digital marketing services.
            </Col>
            <Col
              xs={12}
              md={5}
              style={{ marginBottom: "20px" }}
              className="se mr-md-5mr-md-5-all"
            >
              <h4>
                <i class="fa-solid fa-hand-holding-dollar"></i>Affordable
                Pricing
              </h4>
              Our pricing structure is transparent and tailored to suit the
              unique requirements of each client, making our digital marketing
              services accessible and affordable.
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Together_grow;
