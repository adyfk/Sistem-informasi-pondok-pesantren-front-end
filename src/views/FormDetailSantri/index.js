import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import useAction, { CtxDetailSantriManagement } from "./hooks/useAction";
import FormSantri from "./content/FormSantri";
import FormParent from "./content/FormParent";
import FormDocument from "./content/FormDocument";

const DetailSantriManagement = () => {
  const action = useAction();
  const {
    info: {
      StudentDetail: { generationId, titleGeneration }
    }
  } = action;
  console.log(action);
  return (
    <CtxDetailSantriManagement.Provider value={action}>
      <Container fluid className="main-content-container">
        <Row
          noGutters
          className="page-header py-4 d-flex justify-content-between"
        >
          <PageTitle
            sm="4"
            title="Form Detail Santri"
            className="text-sm-left"
          />
          <Col lg="12">
            <span>
              {titleGeneration} - {generationId}
            </span>
          </Col>
          <Col lg="9" className="p-2 mt-2">
            <FormSantri></FormSantri>
          </Col>
          <Col lg="3" className="p-2 mt-2">
            <FormDocument></FormDocument>
          </Col>
          <Col lg="9" className="p-2 mt-2">
            <FormParent></FormParent>
          </Col>
        </Row>
      </Container>
    </CtxDetailSantriManagement.Provider>
  );
};

export default DetailSantriManagement;
