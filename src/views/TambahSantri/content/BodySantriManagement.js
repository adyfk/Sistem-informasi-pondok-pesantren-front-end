import React, { useContext } from "react";
import { Row, Col } from "shards-react";

import { CtxAddSantriManagement } from "../hooks/useAction";

function BodySantriManagement() {
  const { payload } = useContext(CtxAddSantriManagement);
  return (
    <Row>
      <Col></Col>
    </Row>
  );
}

export default BodySantriManagement;
