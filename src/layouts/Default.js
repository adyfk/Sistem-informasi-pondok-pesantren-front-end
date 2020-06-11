import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout = ({
  children,
  layoutProps: { noNavbar, noSidebar, noFooter, fullWidth }
}) => {
  const props = {
    lg: { size: 10, offset: 2 },
    md: { size: 9, offset: 3 },
    sm: "12"
  };
  if (noSidebar) {
    props.lg.size = 12;
    props.md.size = 12;
  }
  if (fullWidth) {
    props.lg.offset = 0;
    props.md.offset = 0;
  }
  return (
    <Container fluid>
      <Row>
        {!noSidebar && <MainSidebar />}
        <Col className="main-content p-0" {...props} tag="main">
          {!noNavbar && <MainNavbar />}
          {children}
          {!noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
  );
};
DefaultLayout.propTypes = {
  layoutProps: PropTypes.object
};

DefaultLayout.defaultProps = {
  layoutProps: {
    noNavbar: false,
    noFooter: false,
    noSidebar: false,
    fullWidth: false
  }
};

export default DefaultLayout;
