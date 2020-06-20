import React from "react";
import { Container, Row, Button } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import TableSantriManagement from "./content/BodySantriManagement";
import useAction, { CtxAddSantriManagement } from "./hooks/useAction";
import { useForm, FormContext } from "react-hook-form";
const SantriManagement = () => {
  const methods = useForm();
  const action = useAction({ formMethods: methods });

  return (
    <FormContext {...methods}>
      <CtxAddSantriManagement.Provider value={action}>
        <Container fluid className="main-content-container px-4">
          <form onSubmit={methods.handleSubmit(action.onSubmit)}>
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
                right={
                  <div className="float-right">
                    <Button
                      className="btn-white text-danger shadow-sm px-5"
                      pill
                    >
                      Batal
                    </Button>
                    <Button className="ml-4 shadow-sm px-5" pill>
                      Simpan
                    </Button>
                  </div>
                }
              />
            </Row>
            <TableSantriManagement />
          </form>
        </Container>
      </CtxAddSantriManagement.Provider>
    </FormContext>
  );
};

export default SantriManagement;
