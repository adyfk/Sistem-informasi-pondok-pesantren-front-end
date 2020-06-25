import React, { useContext } from "react";
import { Card, CardBody, CardTitle, Row } from "shards-react";
import { CtxDetailSantriManagement } from "../../hooks/useAction";
import { fileMap } from "./utils";
import { ItemFile } from "./content/ItemFile";
import useAction from "./hooks/useAction";
import { BASE_URL } from "../../../../libraries/api/endpoint";

function BodySantriManagement() {
  const { document, setDocument } = useContext(CtxDetailSantriManagement);
  const { loading, handleUpload } = useAction({ setDocument });
  console.log(loading);
  return (
    <Card className="shadow-sm">
      <CardBody>
        <CardTitle className="mb-4">Dokumen Santri</CardTitle>
        <Row>
          {fileMap.map(item => {
            return (
              <ItemFile
                handleUpload={handleUpload}
                key={item.name}
                loading={Boolean(loading[item.name])}
                item={item}
                url={`${BASE_URL}document/${document[item.name]}`}
              ></ItemFile>
            );
          })}
        </Row>
      </CardBody>
    </Card>
  );
}

export default BodySantriManagement;
