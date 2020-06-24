import React, { useContext } from "react";
import { Card, CardBody, CardTitle } from "shards-react";
import { CtxDetailSantriManagement } from "../../hooks/useAction";
// import useAction from "./hooks/useAction";

function BodySantriManagement() {
  const { document } = useContext(CtxDetailSantriManagement);
  console.log(document);
  return (
    <Card className="shadow-sm">
      <CardBody>
        <CardTitle>Dokumen Santri</CardTitle>
      </CardBody>
    </Card>
  );
}

export default BodySantriManagement;
