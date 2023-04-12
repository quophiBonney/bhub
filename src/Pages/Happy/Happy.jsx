import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {BsFillEmojiLaughingFill} from "react-icons/bs";
import happy from "../../assets/happyimg.jpeg";
import HappyCSS from "./Happy.module.css";
import {NavLink} from "react-router-dom";
function Happy() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="justify-content-center">
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
            <img src={happy} alt="" className="img-fluid" id={HappyCSS.img} />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            xxl={6}
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="100"
            className="mb-5 px-4"
          >
            <h5 className={HappyCSS.sectitle}>HAPPY</h5>
            <h3 className={HappyCSS.largeText}>
              Experience blissful and funny moments which will put you on cloud
              nine
            </h3>
            <p className={HappyCSS.fadeText}>
              A platform to share some interesting experiences. Put smiles on
              someone's face by sharing exciting and funny moments with emojis,
              stickers etc. Create Fun and laugh, it is a great therapy!.
            </p>
            <NavLink to="/login" className="btn text-light" id={HappyCSS.fun}>
              Have great fun
              <BsFillEmojiLaughingFill className="m-2" />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Happy;
