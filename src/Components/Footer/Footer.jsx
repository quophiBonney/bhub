import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BsTelegram, BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs";
import FooterCSS from "./Footer.module.css";
import {NavLink} from "react-router-dom";
const Footer = () => {
  return (
    <div className={FooterCSS.cover}>
      <Container className="">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6} className={FooterCSS.footerMargin}>
            <NavLink
              to="https:www.facebook.com"
              className="m-2"
              id={FooterCSS.FB}
            >
              <BsFacebook />
            </NavLink>
            <NavLink to="t.me/+233596840018" className="m-2" id={FooterCSS.FB}>
              <BsTelegram />
            </NavLink>
            <NavLink
              to="https://wa.me/+233596840018"
              className="m-2"
              id={FooterCSS.FB}
            >
              <BsWhatsapp />
            </NavLink>
            <NavLink to="" className="m-3" id={FooterCSS.FB}>
              <BsInstagram />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
