import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {BsFillEmojiLaughingFill} from "react-icons/bs";
function Happy() {
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
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="aboutColumn px-4"
          >
            <img src="" alt="" className="happy-img img-fluid" />
          </Col>
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
            <h5 className="happy">HAPPY</h5>
            <h3 className="happy-text mt-3">
              Experience blissful and funny moments which will put you on cloud
              nine
            </h3>
            <p className="fade-text">
              A platform to share some interesting experiences. Put smiles on
              someone's face by sharing exciting and funny moments with emojis,
              stickers etc. Create Fun and laugh, it is a great therapy!.
            </p>
            <Button className="btn-danger btn-connect">
              Have great fun
              <BsFillEmojiLaughingFill className="m-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Happy;
