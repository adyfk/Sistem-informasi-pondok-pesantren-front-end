import React, { useRef } from "react";
import { Col, Row, Button } from "shards-react";
// import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

export function ItemFile({ loading, item, url, handleUpload }) {
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
            <a
              target="_blank"
              download
              rel="noopener noreferrer"
              href={url}
              title={`Download File ${item.label}`}
            >
              <span className="text-danger material-icons">file_copy</span>
            </a>
          )}
          {Boolean(url) || "Empty"}

          <input
            accept=".pdf"
            ref={ref}
            onChange={handleUpload({ name: item.name })}
            type="file"
            style={{ display: "none" }}
          ></input>
          <ScaleLoader height={10} color={"#123abc"} loading={loading} />
          <Button onClick={() => ref.current.click()} outline size="sm" pill>
            {Boolean(url) && "Ubah file"}
            {Boolean(url) || "Pilih File"}
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
