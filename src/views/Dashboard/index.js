import React from "react";
import { Container, Row } from "shards-react";
import Body from "./content/body";
import PageTitle from "../../components/common/PageTitle";

const Dashboard = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="Info Santri"
        subtitle="Dashboard"
        className="text-sm-left mb-3"
      />
    </Row>
    <Body></Body>
  </Container>
);

export default Dashboard;
