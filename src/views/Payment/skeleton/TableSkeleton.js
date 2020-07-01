import React from "react";
import { TextRow, RectShape } from "react-placeholder/lib/placeholders";
import { Row, Col } from "shards-react";
import "react-placeholder/lib/reactPlaceholder.css";

const TableSkeleton = (
  <React.Fragment>
    <Row className="d-flex justify-content-between mb-4">
      <Col lg={2}>
        <TextRow
          className="show-loading-animation"
          showLoadingAnimation
          color="#E0E0E0"
        ></TextRow>
      </Col>
      <Col lg={2}>
        <TextRow
          className="show-loading-animation"
          showLoadingAnimation
          color="#E0E0E0"
          animated
        ></TextRow>
      </Col>
    </Row>
    <Row>
      <Col lg="12" className="mb-4">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 40 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
      <Col lg="4" className="mb-3">
        <RectShape
          className="show-loading-animation"
          color="#E0E0E0"
          style={{ width: "100%", height: 20 }}
        />
      </Col>
    </Row>
  </React.Fragment>
);

export default TableSkeleton;
