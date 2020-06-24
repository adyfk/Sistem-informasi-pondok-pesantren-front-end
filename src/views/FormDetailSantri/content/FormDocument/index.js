import React, { useContext } from "react";
import { Card, CardBody, CardTitle, Row } from "shards-react";
import { CtxDetailSantriManagement } from "../../hooks/useAction";
import { fileMap } from "./utils";
import { ItemFile } from "./content/ItemFile";
// import useAction from "./hooks/useAction";

function BodySantriManagement() {
  const { document } = useContext(CtxDetailSantriManagement);
  return (
    <Card className="shadow-sm">
      <CardBody>
        <CardTitle className="mb-4">Dokumen Santri</CardTitle>
        <Row>
          {fileMap.map(item => {
            return (
              <ItemFile
                key={item.name}
                item={item}
                url={document[item.name]}
              ></ItemFile>
            );
          })}
        </Row>
      </CardBody>
    </Card>
  );
}

export default BodySantriManagement;
