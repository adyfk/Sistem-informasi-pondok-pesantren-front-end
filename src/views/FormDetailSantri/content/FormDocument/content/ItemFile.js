import React, { useRef } from "react";
import { Col, Row, Button } from "shards-react";
import { Link } from "react-router-dom";

export function ItemFile({ item, url }) {
  const ref = useRef();
  return (
    <Col className="pt-1 pb-2 border-bottom" lg="12">
      <Row>
        <Col lg="12">
          <label>
            <small>{item.label}</small>
          </label>
        </Col>
        <Col
          lg="12"
          className="d-flex justify-content-between align-items-center"
        >
          {Boolean(url) && (
            <Link title={`Download File ${item.label}`} to={url}>
              <span className="text-danger material-icons">file_copy</span>
            </Link>
          )}
          {Boolean(url) || "Empty"}

          <input
            accept=".pdf"
            ref={ref}
            type="file"
            style={{ display: "none" }}
          ></input>
          <Button onClick={() => ref.current.click()} outline size="sm" pill>
            {Boolean(url) && "Ubah file"}
            {Boolean(url) || "Pilih File"}
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
