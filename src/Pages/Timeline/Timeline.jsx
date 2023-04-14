import React from "react";
import TimelineCSS from "./Timeline.module.css";
import {Container, Row, Col, Button} from "react-bootstrap";
import Side from "../../assets/side.jpg";
import {BsFillChatLeftTextFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";
function Timeline() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col
          sm={12}
          md={6}
          lg={6}
          className="px-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <img
            src={Side}
            className="img-fluid img-responsive"
            alt=""
            id={TimelineCSS.img}
          />
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="px-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <h5 className={TimelineCSS.sectitle}>TIMELINE</h5>
          <h3 className={TimelineCSS.largeText}>
            Write your beautiful quotes to the world
          </h3>
          <p className={TimelineCSS.fadeText}>
            You have a beautiful thought the world ought not be deprived of. Be
            the philosopher of our time; share your thoughts to the world. Your
            food for thought could be the life-changing moment in someone's
            life. Be the change with your thoughts!
          </p>
          <NavLink
            to="/login"
            className="btn py-2 mt-2 text-light"
            id={TimelineCSS.startWriting}
          >
            Start Writing
            <BsFillChatLeftTextFill className="m-2" />
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Timeline;
