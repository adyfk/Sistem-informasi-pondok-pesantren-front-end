import React, { useContext, useState } from "react";
import { Row, Modal, Col, Button, InputGroup, FormInput } from "shards-react";

import { CtxClassSantri } from "../hooks/useAction";

const DialogAdd = () => {
  const [nis, setNis] = useState("");
  const { add, setAdd, repository } = useContext(CtxClassSantri);
  return (
    <Modal size="sm" open={add === "add"} toggle={() => setAdd(false)}>
      <Row className="py-4 px-4">
        <Col lg="12" className="text-center mb-3">
          <span>Masukan Nomor Induk Santri</span>
        </Col>
        <Col className="text-center mb-3">
          <InputGroup>
            <FormInput
              type="text"
              value={nis}
              onChange={e => setNis(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col lg="12" className="text-center">
          <Button
            theme="primary"
            onClick={() => {
              repository.getStudentNis({ id: nis });
            }}
            pill
          >
            Check
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default DialogAdd;
