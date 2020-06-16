import React, { useContext } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import { schemaTable, sumCost } from "../helper";
import { CtxGenerationManagement } from "../hooks/useAction";
import ElementTableView from "./ElementTableView";
import ElementTableEdit from "./ElementTableEdit";

function TableGeneration() {
  const {
    useEdit,
    generationDetail,
    saveFormDetailGeneration,
    setEmptyGenerationDetail,
    removeEmptyGenerationDetail,
    deleteGenerationDetail,
    genereteNewGeneration
  } = useContext(CtxGenerationManagement);
  const [edit, setEdit] = useEdit;
  return (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom d-flex justify-content-between">
            <h6 className="m-0">
              Total Biaya{` - `}
              <span className="text-danger">
                <small>Rp</small> {sumCost(generationDetail).toLocaleString()}
              </span>
            </h6>
            <div>
              <Button
                disabled={edit}
                onClick={setEmptyGenerationDetail}
                className="btn-info text-white btn-sm"
                pill
              >
                Tambah List
              </Button>
              <Button
                onClick={genereteNewGeneration}
                className="btn-danger btn-sm ml-2"
              >
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
                {generationDetail?.map((data, index) =>
                  edit === index ||
                  (edit === "new" && index + 1 === generationDetail.length) ? (
                    <ElementTableEdit
                      {...data}
                      key={index}
                      index={index + 1}
                      onCencel={() => {
                        edit === "new" && removeEmptyGenerationDetail();
                        setEdit(false);
                      }}
                      onSave={saveFormDetailGeneration({ id: data?.id, index })}
                    />
                  ) : (
                    <ElementTableView
                      {...data}
                      key={index}
                      index={index + 1}
                      onEdit={() => setEdit(index)}
                      onDelete={deleteGenerationDetail({ id: data.id })}
                    />
                  )
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default TableGeneration;
