import React, { useContext } from "react";
import { Row, Modal, Col, Button } from "shards-react";

import { CtxClassSantri } from "../hooks/useAction";

const DialogDetail = () => {
  const { detail, add } = useContext(CtxClassSantri);
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
