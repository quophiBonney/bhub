import React, {useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import main from "../../assets/main.jpg";
import Timeline from "../Timeline/Timeline";
import Connect from "../Connect/Connect";
import Happy from "../Happy/Happy";
import {
  BsFillPeopleFill,
  BsFillChatLeftTextFill,
  BsFillEmojiLaughingFill,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import MainCSS from "./Main.module.css";
import {Link} from "react-router-dom";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
            className="px-4"
            id={MainCSS.aboutColumn}
          >
            <h3 className={MainCSS.maintext}>
              The exciting way of being motivated and create happiness forever.
            </h3>
            <p className={MainCSS.fadetext}>
              Become the best version of yourself as our plaftfomrmotivates
              through insprational quotes, music, gifs and many more.
            </p>
            <Link to="/login">
              <Button className="btn py-2 mt-4" id={MainCSS.connectbtn}>
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
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <BsFillChatLeftTextFill className={MainCSS.emoji} />
                <p>
                  <strong>Chat us</strong>
                  <br />
                  <span className={MainCSS.fadetext}>
                    Be the change with your thoughts.
                  </span>
                </p>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={4}
                className="mt-4"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <BsFillEmojiLaughingFill className={MainCSS.emoji} />
                <p>
                  <strong>Be happy</strong>
                  <br />
                  <span className={MainCSS.fadetext}>
                    We put smiles on your face.
                  </span>
                </p>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={4}
                className="mt-4"
                data-aos="zoom-in"
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
            className="px-4"
            id={MainCSS.aboutColumn}
          >
            <img src={main} alt="" className="img-fluid" id={MainCSS.mainImg} />
          </Col>
        </Row>
      </Container>
      <Timeline />
      <Connect />
      <Happy />
    </div>
  );
};

export default Main;
