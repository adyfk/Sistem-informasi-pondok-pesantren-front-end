import React, { useContext } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import { schemaTable } from "../helper";
import { CtxClassSantri } from "../hooks/useAction";
import ElementTableView from "./ElementTableView";

function TableStudentClass() {
  const { studentClass, setAdd, onDelete } = useContext(CtxClassSantri);
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom d-flex justify-content-between">
            <h6 className="m-0">Total Orang {studentClass?.length}</h6>
            <div>
              <Button
                onClick={() => setAdd("add")}
                className="btn-primary text-white btn-sm"
                pill
              >
                Tambah List
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
                {studentClass?.map((data, index) => (
                  <ElementTableView
                    {...data}
                    studentIn={data.StudentClasses[0].studentIn}
                    key={index}
                    index={index + 1}
                    onDelete={onDelete({
                      id: data.StudentClasses[0].id,
                      studentId: data.id
                    })}
                  />
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default TableStudentClass;
