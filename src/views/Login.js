import React from "react";
import { Container, Row, Col } from "shards-react";
import LoginForm from "../components/login/LoginForm";

const Login = () => (
  <div style={{ height: "100vh" }}>
    <Container fluid className="main-content-container px-4 pb-4 h-100">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col lg="4" md="12">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Login;
