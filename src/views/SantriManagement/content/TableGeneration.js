import React, { useContext } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import { schemaTable } from "../helper";
import { CtxSantriManagement } from "../hooks/useAction";
import ElementTableView from "./ElementTableView";

function TableSantri() {
  const { santris } = useContext(CtxSantriManagement);
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom d-flex justify-content-between">
            <h6 className="m-0">
              Total Santri {santris.pages * santris.total} dari {santris.total}
            </h6>
            <div>
              <Button
                onClick={() => ""}
                className="btn-secondary text-white btn-sm mr-3"
                pill
              >
                Filter
              </Button>
              <Button
                onClick={() => ""}
                className="btn-primary text-white btn-sm"
                pill
              >
                Tambah Santri
              </Button>
            </div>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  {schemaTable.tableHeader.map(schema => (
                    <th
                      key={schema.name}
                      scope={schema.scope}
                      className={schema.classHead}
                    >
                      {schema.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {santris.docs.map((santri, index) => (
                  <ElementTableView
                    key={index}
                    index={index + 1}
                    onDetail={() => ""}
                    {...santri}
                  ></ElementTableView>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default TableSantri;
