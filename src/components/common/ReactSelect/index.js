import React from "react";
import Select from "react-select";
import "./styles.css";

const optinalControl = bool => ({
  boxShadow: bool
    ? "0 0.313rem 0.719rem rgba(0,123,255,.1), 0 0.156rem 0.125rem rgba(0,0,0,.06)"
    : ""
});
const customStyles = {
  container: provided => ({
    width: "100%",
    ...provided
  }),
  control: (provided, state) => ({
    ...provided,
    ...optinalControl(state.isFocused),
    border: "1px solid rgb(225, 229, 235)"
  }),
  placeholder: () => ({
    fontWeight: 100,
    fontSize: 13,
    opacity: 0.8
  }),
  valueContainer: provided => ({
    ...provided,
    color: "#495057 !important",
    fontWeight: 100
  }),
  menuList: provided => ({
    fontWeight: 100,
    ...provided
  })
};
const ReactSelect = ({ onChange, value, ...rest }) => {
  const handleChange = item => {
    onChange(item.value);
  };
  const getValue = (opts, val) => {
    return opts.find(o => val === o.value);
  };
  return (
    <Select
      value={getValue(rest.options, value) || null}
      input={{ onChange: item => rest.input.onChange(item.value) }}
      components={{
        IndicatorSeparator: () => null
      }}
      styles={customStyles}
      onChange={handleChange}
      {...rest}
      maxMenuHeight={210}
    />
  );
};

export default ReactSelect;
