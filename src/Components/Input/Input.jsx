import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useFormContext} from "react-hook-form";

const Input = ({label, type, id, placeholder}) => {
  const {register} = useFormContext();
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={6}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              placeholder={placeholder}
              className="form-control"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Input;
