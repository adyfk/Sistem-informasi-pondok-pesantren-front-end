import React, { useContext } from "react";
import { Row, Modal, Col, Button } from "shards-react";

import { CtxClassSantri } from "../hooks/useAction";

const DialogDetail = () => {
  const { detail, add, repository } = useContext(CtxClassSantri);
  return (
    <Modal size="sm" open={add === "detail"}>
      <Row className="py-4 px-4">
        <Col lg="12" className="text-center mb-3">
          <small>Nama</small>
          <div>{detail.name}</div>
        </Col>
        <Col lg="6" className="text-center mr-1 mb-3">
          <small>Tanggal Lahir</small>
          <div>{new Date(detail.dateOfBirth).toDateString()}</div>
        </Col>
        <Col lg="5" className="text-center ml-1 mb-3">
          <small>Jenis Kelamin</small>
          <div>{detail.gender === "P" ? "Perempuan" : "Laki-laki"}</div>
        </Col>
        <Col lg="12" className="mt-2 text-center">
          <Button
            onClick={() => {
              repository.addStudentToClass(detail.id);
            }}
            theme="primary"
            pill
          >
            Tambah ke kelas
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default DialogDetail;
