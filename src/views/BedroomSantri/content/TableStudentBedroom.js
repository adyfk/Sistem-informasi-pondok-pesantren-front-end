import React, { useContext } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import { schemaTable } from "../helper";
import { CtxClass } from "../hooks/useAction";
import ElementTableView from "./ElementTableView";

function TableStudentBedroom() {
  const { bedroom, studentBedroom, setEmptyClass, onDelete } = useContext(
    CtxClass
  );
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom d-flex justify-content-between">
            <h6 className="m-0">
              Total Orang {studentBedroom?.length} - Maksimum {bedroom.capacity}
            </h6>
            <div>
              <Button
                onClick={setEmptyClass}
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
                {studentBedroom?.map((data, index) => (
                  <ElementTableView
                    {...data}
                    studentIn={data.StudentBedrooms[0].studentIn}
                    key={index}
                    index={index + 1}
                    onDelete={onDelete({
                      id: data.StudentBedrooms[0].id,
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

export default TableStudentBedroom;
