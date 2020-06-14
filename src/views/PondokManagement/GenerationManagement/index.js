import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../../components/common/PageTitle";
import TableGeneration from "./content/TableGeneration";
import useAction, { CtxGenerationManagement } from "./hooks/useAction";

const GenerationManagement = () => {
  const action = useAction();
  return (
    <CtxGenerationManagement.Provider value={action}>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Generation Management"
            subtitle={`Daftar Biaya angkatan ${action.generation.data?.id?.slice(
              1
            )}`}
            className="text-sm-left"
          />
        </Row>
        <TableGeneration />
      </Container>
    </CtxGenerationManagement.Provider>
  );
};

export default GenerationManagement;
