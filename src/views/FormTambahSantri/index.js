import React from "react";
import { Container, Row, Button, Modal, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import TableSantriManagement from "./content/BodySantriManagement";
import useAction, { CtxAddSantriManagement } from "./hooks/useAction";
import { useForm, FormContext } from "react-hook-form";
import { Link } from "react-router-dom";
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
                      outline
                      className="shadow-sm px-5"
                      pill
                      theme="danger"
                      onClick={methods.reset}
                    >
                      Batal
                    </Button>
                    <Button
                      // outline
                      type="submit"
                      theme="primary"
                      className="ml-4 shadow-sm px-5"
                      pill
                    >
                      Simpan
                    </Button>
                  </div>
                }
              />
            </Row>
            <TableSantriManagement />
          </form>
          <Modal
            size="sm"
            open={Boolean(action.notice)}
            toggle={action.toggleNotice}
          >
            <Row className="py-4">
              <Col lg="12" className="text-center">
                <span className="material-icons display-4 text-success">
                  done
                </span>
              </Col>
              <Col lg="12" className="text-center">
                <div>Sukses Tambah Santri</div>
              </Col>
              <Col lg="12" className="mt-4 text-center">
                <div>
                  <Button
                    className="btn-white text-danger mr-1"
                    onClick={() => {
                      methods.reset();
                      action.toggleNotice();
                    }}
                    pill
                  >
                    Tambah Santri{" "}
                  </Button>
                  <Button
                    tag={Link}
                    to={`detail/${"test"}`}
                    className="btn-primary ml-1"
                    pill
                  >
                    Lengkapi Data
                  </Button>
                </div>
              </Col>
            </Row>
          </Modal>
        </Container>
      </CtxAddSantriManagement.Provider>
    </FormContext>
  );
};

export default SantriManagement;
