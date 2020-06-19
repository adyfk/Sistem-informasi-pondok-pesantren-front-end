import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import TableGeneration from "./content/TableGeneration";
import useAction, { CtxSantriManagement } from "./hooks/useAction";

const GenerationManagement = () => {
  const action = useAction();
  return (
    <CtxSantriManagement.Provider value={action}>
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header py-4 d-flex justify-content-between align-items-center"
        >
          <PageTitle
            right="search"
            sm="4"
            input={{
              value: action.search,
              onChange: e => action.setSearch(e.target.value)
            }}
            title="Santri Management"
            subtitle={`Daftar santri`}
            className="text-sm-left"
          />
        </Row>
        <TableGeneration />
      </Container>
    </CtxSantriManagement.Provider>
  );
};

export default GenerationManagement;
