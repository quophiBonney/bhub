import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import connectimg from "../../assets/connectimg.jpeg";
import Carousel from "react-bootstrap/Carousel";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import LoginCSS from "./Login.module.css";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="container-fluid form-container">
        <Row className="justify-content-center">
          <Col sm={12} md={5} lg={5} className="px-4" id={LoginCSS.signupForm}>
            <div className={LoginCSS.btnGroup}>
              <div className="col-xs-12 col-sm-12 col-md-6 mt-3">
                <a
                  href=""
                  className="btn btn-primary py-3"
                  id={LoginCSS.loginContainer}
                >
                  <BsFacebook className="m-2" />
                  Login With Facebook
                </a>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 mt-3">
                <a
                  href=""
                  className="btn btn-dark py-2"
                  id={LoginCSS.loginContainer}
                >
                  <BsGoogle className="m-2" />
                  Login With Google
                </a>
              </div>
            </div>
            <h3 className="text-center mt-3 py-2" id={LoginCSS.formtitle}>
              Login to Your Account
            </h3>
            <form onSubmit={e => e.preventDefault()} noValidate>
              <div className="form-group mt-3">
                <input
                  label="email"
                  type="email"
                  placeholder="Email Address"
                  required=""
                  className="py-2 form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  label="password"
                  type="password"
                  placeholder="Password"
                  required=""
                  className="py-2 form-control"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Signup"
                  className="btn btn-danger py-2 form-control"
                />
              </div>
              <div className="text-center mt-3 ">
                <a href="" className="text-decoration-none text-center">
                  Don't have account yet?&nbsp;
                  <Link to="/signup" className="text-dark text-decoration-none">
                    Singup
                  </Link>
                </a>
              </div>
              <div className="d-flex mt-3 mb-3 justify-content-center">
                <BsLinkedin className="m-2 linkedin" />
                <BsFacebook className="m-2 fb" />
                <BsInstagram className="m-2 ig" />
                <BsTwitter className="m-2 twitter" />
              </div>
            </form>
          </Col>
          <Col sm={12} md={7} lg={7} className={LoginCSS.secondcon}>
            <Carousel indicators={false} controls={false}>
              <Carousel.Item interval={1000}>
                <img
                  src={connectimg}
                  className="img-fluid img-responsive"
                  alt=""
                  id={LoginCSS.signupImg}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={connectimg}
                  className="img-fluid img-responsive"
                  alt=""
                  id={LoginCSS.signupImg}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={connectimg}
                  className="img-fluid img-responsive"
                  alt=""
                  id={LoginCSS.signupImg}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
