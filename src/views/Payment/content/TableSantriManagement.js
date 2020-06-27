import React, { useContext } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import { schemaTable } from "../helper";
import { CtxPaymentManagement } from "../hooks/useAction";
import ElementTableView from "./ElementTableView";

function TableSantri() {
  const { payment } = useContext(CtxPaymentManagement);
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom d-flex justify-content-between">
            <h6 className="m-0">Table Tagihan</h6>
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
                {payment.map((payment, index) => (
                  <ElementTableView
                    key={index}
                    index={index + 1}
                    onDetail={() => ""}
                    {...payment}
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
