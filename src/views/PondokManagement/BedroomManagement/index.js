import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../../components/common/PageTitle";
import TableGeneration from "./content/TableGeneration";
import useAction, { CtxBedroom } from "./hooks/useAction";

const BedroomManagement = () => {
  const action = useAction();
  return (
    <CtxBedroom.Provider value={action}>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Bedroom Management"
            subtitle={`List kamar santri`}
            className="text-sm-left"
          />
        </Row>
        <TableGeneration />
      </Container>
    </CtxBedroom.Provider>
  );
};

export default BedroomManagement;
