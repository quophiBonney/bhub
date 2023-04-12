import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import connect from "../../assets/connectimg.jpeg";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import ConnectCSS from "./Connect.module.css";
import {NavLink} from "react-router-dom";
const Connect = () => {
  return (
    <div>
      {" "}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={6}
            xxl={6}
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="aboutColumn px-4"
          >
            <h5 className={ConnectCSS.sectitle}>Connect</h5>
            <h3 className={ConnectCSS.largeText}>
              Connect, acquaint and familiarise with People from different
              backgrounds.
            </h3>
            <p className={ConnectCSS.fadeText}>
              Find people with similar and divergent views and opinions and
              connect. Share your experience and problems with people; as the
              apothegm goes "A problem shared is half solved". Find your helper,
              share your dream and problem with people and connect for greater
              pursuits.
            </p>
            <NavLink
              to="/login"
              className="btn text-light"
              id={ConnectCSS.connect}
            >
              Have great fun
              <BsFillChatLeftTextFill className="m-2" />
            </NavLink>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            xxl={6}
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="px-4"
          >
            <img
              src={connect}
              alt=""
              className="img-fluid"
              id={ConnectCSS.img}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Connect;
