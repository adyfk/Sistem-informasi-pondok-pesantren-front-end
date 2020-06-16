/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          category: "Generate Generation",
          categoryTheme: "dark",
          body: "Membuat Otomatis Angakatan Baru"
        },
        {
          category: "Bedroom Manamagent",
          categoryTheme: "royal-blue",
          body: "Menambah & Mengubah data kamar"
        },
        {
          category: "Class Management",
          categoryTheme: "warning",
          body: "Menambah & Mengubah data kelas"
        }
      ]
    };
  }

  render() {
    const { PostsListOne } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Pondok Management"
            subtitle="Pilih Menu"
            className="text-sm-left"
          />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" key={idx}>
              <Card small className="card-post card-post--1">
                <Badge
                  pill
                  className={`card-post__category bg-${post.categoryTheme}`}
                >
                  {post.category}
                </Badge>
                <CardBody className="my-5">
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block text-center">
                    {post.body}
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
