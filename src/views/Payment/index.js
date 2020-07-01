import React from "react";
import { Container, Row, Col } from "shards-react";
import ReactPlaceholder from "react-placeholder";
import PageTitle from "../../components/common/PageTitle";
import TableSantriManagement from "./content/TableSantriManagement";
import useAction, { CtxPaymentManagement } from "./hooks/useAction";
import TableSkeleton from "./skeleton/TableSkeleton";
import ModalDetail from "./content/ModalDetail";

const SantriManagement = () => {
  const action = useAction();
  return (
    <CtxPaymentManagement.Provider value={action}>
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
            placeholder="search by nis"
            title="Menejemen Pembayaran"
            subtitle={`Daftar Tagihan`}
            className="text-sm-left"
          />
        </Row>
        {action.loading.listPayment !== "empty" && (
          <ReactPlaceholder
            showLoadingAnimation
            ready={action.loading.listPayment === "done"}
            customPlaceholder={TableSkeleton}
          >
            <Row className="mb-3">
              <Col>
                <small>Nama</small> <span>{action.santri.name}</span>
              </Col>
              <Col className="text-right">
                <small>Nim</small> <span>{action.santri.id}</span>
              </Col>
            </Row>
            <TableSantriManagement />
          </ReactPlaceholder>
        )}
      </Container>
      <ModalDetail></ModalDetail>
    </CtxPaymentManagement.Provider>
  );
};

export default SantriManagement;
