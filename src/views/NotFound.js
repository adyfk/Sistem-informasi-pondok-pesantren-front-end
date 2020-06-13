import React from "react";
import { Container, Button } from "shards-react";
import { Link } from "react-router-dom";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>Please try again another page.</p>
        <Button tag={Link} to="/" pill>
          &larr; Go Back to Dashboard
        </Button>
      </div>
    </div>
  </Container>
);

export default Errors;
