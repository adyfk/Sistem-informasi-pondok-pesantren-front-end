import React, { useContext } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import { schemaTable } from "../helper";
import { CtxClass } from "../hooks/useAction";
import ElementTableView from "./ElementTableView";
import ElementTableEdit from "./ElementTableEdit";
import { isEditTable } from "../../../../utils/global";

function Tableclass() {
  const {
    useEdit,
    classes,
    setEmptyClass,
    saveFormClass,
    removeEmptyClass
  } = useContext(CtxClass);
  const [edit, setEdit] = useEdit;
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom d-flex justify-content-between">
            <h6 className="m-0">Total Kamar {classes?.length}</h6>
            <div>
              <Button
                disabled={edit === "new" || edit !== false}
                onClick={setEmptyClass}
                className="btn-info text-white btn-sm"
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
                {classes?.map((data, index) => {
                  return isEditTable({ edit, index, data: classes }) ? (
                    <ElementTableEdit
                      {...data}
                      key={index}
                      index={index + 1}
                      onCencel={() => {
                        edit === "new" && removeEmptyClass();
                        setEdit(false);
                      }}
                      onSave={saveFormClass({ id: data?.id, index })}
                    />
                  ) : (
                    <ElementTableView
                      {...data}
                      key={index}
                      index={index + 1}
                      onEdit={() => setEdit(index)}
                    />
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Tableclass;
