import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Row,
  Col,
  FormFeedback
} from "shards-react";

const SignInSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .min(6)
    .required()
});

const LoginForm = ({ userDetails }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignInSchema
  });
  console.log("error", errors);
  const onSubmit = data => console.log("submit", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card small className="py-3">
        <CardHeader className="text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={userDetails.avatar}
              alt={userDetails.name}
              width="110"
            />
          </div>
          <h4 className="mb-0">Selamat Datang</h4>
          <span className="text-muted d-block mb-2">Login</span>
          <Row className="px-3 mt-3">
            <Col lg="12" className="text-left">
              <InputGroup seamless className="mb-3">
                <InputGroupAddon
                  type="prepend"
                  className="input-group-prepend-custom-bottom"
                >
                  <InputGroupText>
                    <i className="material-icons">person</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput
                  invalid={Boolean(errors["username"])}
                  type="text"
                  name="username"
                  innerRef={register}
                  placeholder="Username"
                />
                {errors["username"] && (
                  <FormFeedback>{errors["username"].message}</FormFeedback>
                )}
              </InputGroup>
            </Col>
            <Col lg="12" className="text-left">
              <InputGroup seamless className="mb-3">
                <InputGroupAddon
                  type="prepend"
                  className="input-group-prepend-custom-bottom"
                >
                  <InputGroupText>
                    <i className="material-icons">lock</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput
                  invalid={Boolean(errors["password"])}
                  name="password"
                  type="password"
                  innerRef={register}
                  placeholder="Password"
                />
                {errors["password"] && (
                  <FormFeedback>{errors["password"].message}</FormFeedback>
                )}
              </InputGroup>
            </Col>
            <Col lg="12 mb-4 mt-3">
              <Button
                className="rounded-pill w-50 font-weight-bold btn-info"
                type="submit"
              >
                Sig In
              </Button>
            </Col>
            <Col lg="12">
              <span className="font-weight-normal">
                <small>@Copyright Santri Management</small>
              </span>
            </Col>
          </Row>
        </CardHeader>
      </Card>
    </form>
  );
};

LoginForm.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

LoginForm.defaultProps = {
  userDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default LoginForm;
