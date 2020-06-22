import React, { useContext, useState } from "react";
import { Row, Modal, Col, Button, InputGroup, FormInput } from "shards-react";

import { CtxBedroomSantri } from "../hooks/useAction";

const DialogDetail = () => {
  const { detail, add } = useContext(CtxBedroomSantri);
  return (
    <Modal size="sm" open={add === "detail"}>
      <Row className="py-4 px-4">
        <Col lg="12" className="text-center mb-3">
          <small>Nama</small>
          <div>{detail.name}</div>
        </Col>
        <Col lg="12" className="text-center">
          <Button theme="primary" pill>
            Tambah ke kelas
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default DialogDetail;
