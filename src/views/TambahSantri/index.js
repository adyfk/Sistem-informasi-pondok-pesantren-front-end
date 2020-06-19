import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import TableSantriManagement from "./content/BodySantriManagement";
import useAction, { CtxAddSantriManagement } from "./hooks/useAction";

const SantriManagement = () => {
  const action = useAction();
  return (
    <CtxAddSantriManagement.Provider value={action}>
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header py-4 d-flex justify-content-between align-items-center"
        >
          <PageTitle
            sm="4"
            input={{
              value: action.search,
              onChange: e => action.setSearch(e.target.value)
            }}
            title="Form Tambah Santri"
            className="text-sm-left"
          />
        </Row>
        <TableSantriManagement />
      </Container>
    </CtxAddSantriManagement.Provider>
  );
};

export default SantriManagement;
