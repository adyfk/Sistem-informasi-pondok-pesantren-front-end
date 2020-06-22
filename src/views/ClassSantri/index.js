import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import TableStudentBedroom from "./content/TableStudentBedroom";
import DialogAdd from "./content/DialogAdd";
import useAction, { CtxClassSantri } from "./hooks/useAction";
import { string } from "../../utils/string";

const BedroomManagement = () => {
  const action = useAction();
  return (
    <CtxClassSantri.Provider value={action}>
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title={`Class ${string(action.classx?.title)}`}
            // subtitle={`List kamar santri ${
            //   action.classx.gender === "P" ? "Putri" : "Putra"
            // }`}
            className="text-sm-left"
          />
        </Row>
        <TableStudentBedroom />
      </Container>
      <DialogAdd></DialogAdd>
    </CtxClassSantri.Provider>
  );
};

export default BedroomManagement;
