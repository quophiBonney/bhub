import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import side from "../../assets/side.jpg";
import Carousel from "react-bootstrap/Carousel";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import {Link} from "react-router-dom";
import SignupCSS from "./Signup.module.css";
import {useForm, FormProvider} from "react-hook-form";
const Signup = () => {
  const methods = useForm();
  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
  });
  return (
    <div>
      <div className="container-fluid form-container">
        <Row className="justify-content-center">
          <Col sm={12} md={5} lg={5} className="px-4" id={SignupCSS.signupForm}>
            <h3 className="text-center mt-5 py-3" id={SignupCSS.formtitle}>
              Signup to Your Account
            </h3>
            <FormProvider {...methods}>
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
                    label="date of birth"
                    type="date"
                    placeholder="date"
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
                    label="password"
                    type="password"
                    placeholder="Confirm Password"
                    required=""
                    className="py-2 form-control"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Signup"
                    onSubmit={onSubmit}
                    className="btn btn-danger py-2 form-control"
                  />
                </div>
                <div className="text-center mt-3 ">
                  <a href="" className="text-decoration-none text-center">
                    Already have an account?&nbsp;
                    <Link
                      to="/login"
                      className="text-dark text-decoration-none"
                    >
                      Login
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
            </FormProvider>
          </Col>
          <Col sm={12} md={7} lg={7} className={SignupCSS.secondcon}>
            <Carousel indicators={false} controls={false}>
              <Carousel.Item interval={1000}>
                <img
                  src={side}
                  className="img-fluid img-responsive"
                  alt=""
                  id={SignupCSS.signupImg}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={side}
                  className="img-fluid img-responsive"
                  alt=""
                  id={SignupCSS.signupImg}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={side}
                  className="img-fluid img-responsive"
                  alt=""
                  id={SignupCSS.signupImg}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
