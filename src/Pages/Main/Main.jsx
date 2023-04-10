import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import main from "../../assets/main.jpg";
import {
  BsFillPeopleFill,
  BsFillChatLeftTextFill,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
import "./Main.css";
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={6}
            xxl={6}
            data-aos="slide-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="aboutColumn px-4"
          >
            <h3 className="main-text">
              The exciting way of being motivated and create happiness forever.
            </h3>
            <p className="fade-text">
              Become the best version of yourself as our plaftfomrmotivates
              through insprational quotes, music, gifs and many more.
            </p>
            <Link to="/login">
              <Button className="connect-btn py-2 mt-4">
                Write Your Quotes
                <BsFillPeopleFill className="m-2" />
              </Button>
            </Link>
            <Row>
              <Col
                sm={12}
                md={4}
                lg={4}
                className="mt-4"
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <BsFillChatLeftTextFill className="emoji" />
                <p>
                  <strong>Chat us</strong>
                  <br />
                  <span className="fade-text">
                    Be the change with your thoughts.
                  </span>
                </p>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={4}
                className="mt-4"
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <BsFillEmojiLaughingFill className="emoji" />
                <p>
                  <strong>Be happy</strong>
                  <br />
                  <span className="fade-text">We put smiles on your face.</span>
                </p>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={4}
                className="mt-4"
                data-aos="slide-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <BsFillPeopleFill className="emoji" />
                <p>
                  <strong>Connect with many</strong>
                  <br />
                  <span className="fade-text">
                    Find people with similar views.
                  </span>
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            xxl={6}
            data-aos="slide-left"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="aboutColumn px-4"
          >
            <img src={main} alt="" className="main-img img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
