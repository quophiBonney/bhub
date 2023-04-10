import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import connectimg from "../../assets/connectimg.jpeg";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import "./Login.css";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div className="container-fluid form-container">
      <Row className="justify-content-center">
        <Col sm={12} md={5} lg={5} className="px-4">
          <h3 className="form-title text-center py-3">Login to Your Account</h3>
          <Row className="justify-content-center">
            <Col sm={12} md={12} lg={12} className="d-flex">
              <a href="" className="btn btn-primary py-3 w-50">
                <BsFacebook className="m-2" />
                Login With Facebook
              </a>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <a href="" className="btn btn-dark py-3 w-50">
                <BsGoogle className="m-2" />
                Login With Google
              </a>
            </Col>
          </Row>
          <form action="" method="">
            <div className="form-group mt-3">
              <input
                type="email"
                placeholder="Email Address"
                required=""
                className="py-3 form-control"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                placeholder="Password"
                required=""
                className="py-3 form-control"
              />
            </div>

            <div className="space-btn d-flex">
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Login Into Your Account"
                  className="btn btn-danger py-3 form-control"
                />
              </div>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <a href="" className="mt-3 text-decoration-none">
                Forgot password?
              </a>
            </div>
            <div className="text-center mt-3 ">
              <a href="" className="text-decoration-none text-center">
                Don't have an account yet?&nbsp;
                <Link to="/signup" className="text-dark text-decoration-none">
                  Signup
                </Link>
              </a>
            </div>
            <div className="d-flex mt-3 mb-3">
              <BsLinkedin className="m-2 linkedin" />
              <BsFacebook className="m-2 fb" />
              <BsInstagram className="m-2 ig" />
              <BsTwitter className="m-2 twitter" />
            </div>
          </form>
        </Col>
        <Col sm={12} md={7} lg={7}>
          <img src={connectimg} className="img-fluid img-responsive" />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
