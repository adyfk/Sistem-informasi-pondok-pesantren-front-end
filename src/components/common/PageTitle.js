import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  Col,
  InputGroup,
  InputGroupAddon,
  FormInput,
  InputGroupText
} from "shards-react";

const PageTitle = ({
  title,
  subtitle,
  classNameRight,
  className,
  right,
  input,
  placeholder,
  ...attrs
}) => {
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    "mb-sm-0"
  );

  return (
    <React.Fragment>
      <Col
        lg={Boolean(right) ? "5" : "12"}
        sm="4"
        className={classes}
        {...attrs}
      >
        <span className="text-uppercase page-subtitle">{subtitle}</span>
        <h3 className="page-title">{title}</h3>
      </Col>
      {right && (
        <Col lg={right === "search" ? 3 : 5} sm="4" className={classNameRight}>
          {right === "search" ? (
            <InputGroup seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  <i className="material-icons">search</i>
                </InputGroupText>
              </InputGroupAddon>
              <FormInput
                className="rounded-pill"
                value={input.value}
                placeholder={placeholder}
                onChange={input.onChange}
              />
            </InputGroup>
          ) : (
            right
          )}
        </Col>
      )}
    </React.Fragment>
  );
};

PageTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string,
  classNameRight: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string
};
PageTitle.defaultProps = {
  classNameRight: "",
  right: "",
  input: {
    value: "",
    onChange: () => ""
  },
  placeholder: "search"
};

export default PageTitle;
