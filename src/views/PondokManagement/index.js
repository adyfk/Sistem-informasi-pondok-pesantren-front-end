/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Container, Row, Col, Card, CardBody, Badge } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import { Link } from "react-router-dom";
import { pushPath } from "../../utils/url";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          category: "Menejemen Angkatan",
          categoryTheme: "dark",
          body: "Menambah & Mengubah biaya administrasi",
          to: pushPath("generation-management")
        },
        {
          category: "Menejemen Kamar",
          categoryTheme: "royal-blue",
          body: "Menambah & Mengubah data kamar",
          to: pushPath("bedroom-management")
        },
        {
          category: "Menejemen Kamar",
          categoryTheme: "warning",
          body: "Menambah & Mengubah data kelas",
          to: pushPath("class-management")
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
            title="Menejemen Pondok"
            subtitle="Pilih Menu"
            className="text-sm-left"
          />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" key={idx} tag={Link} to={post.to}>
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
