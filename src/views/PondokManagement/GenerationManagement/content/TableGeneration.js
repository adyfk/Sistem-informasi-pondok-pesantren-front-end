import React, { useContext, useMemo } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import { schemaTable } from "../helper";
import { CtxGenerationManagement } from "../hooks/useAction";

function TableGeneration() {
  const {
    generation: { data }
  } = useContext(CtxGenerationManagement);
  const total = useMemo(() =>
    data?.GenerationDetails?.reduce(
      (prev, curr) => curr.cost + prev,
      0
    ).toLocaleString()
  );
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom d-flex justify-content-between">
            <h6 className="m-0">
              Total Biaya{` - `}
              <span className="text-danger">
                <small>Rp</small> {total}
              </span>
            </h6>
            <div>
              <Button className="btn-warning text-white btn-sm" pill>
                Tambah List
              </Button>
              <Button className="btn-danger btn-sm ml-2">
                Buat Angakatan Baru
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
                {data?.GenerationDetails?.map((data, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>
                      <small>Rp</small> {data.cost?.toLocaleString()}
                    </td>
                    <td>
                      <span className="material-icons text-warning text-button">
                        create
                      </span>
                      <span className="material-icons text-danger text-button ml-4">
                        delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default TableGeneration;
