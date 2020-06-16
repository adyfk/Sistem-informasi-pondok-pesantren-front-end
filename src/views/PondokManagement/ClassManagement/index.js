import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../../components/common/PageTitle";
import TableClass from "./content/TableClass";
import useAction, { CtxClass } from "./hooks/useAction";

const BedroomManagement = () => {
  const action = useAction();
  return (
    <CtxClass.Provider value={action}>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Bedroom Management"
            subtitle={`List kamar santri`}
            className="text-sm-left"
          />
        </Row>
        <TableClass />
      </Container>
    </CtxClass.Provider>
  );
};

export default BedroomManagement;
