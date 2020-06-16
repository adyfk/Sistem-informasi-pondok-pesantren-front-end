import React from "react";
import { InputGroup, FormInput, FormFeedback, FormSelect } from "shards-react";
import * as yup from "yup";
import useForm from "../../../../libraries/form";

const BedroomSchema = yup.object().shape({
  title: yup.string().required(),
  gender: yup
    .string()
    .max(1)
    .required(),
  capacity: yup.number().required()
});

function ElementTableEdit({
  index,
  title,
  gender,
  capacity,
  onCencel,
  onSave
}) {
  const { errors, values, onChange, handleSubmit } = useForm({
    defaultValues: {
      title,
      gender,
      capacity
    },
    schema: BedroomSchema
  });
  console.log(errors);
  return (
    <React.Fragment>
      <tr>
        <td>{index}</td>
        <td>
          <InputGroup>
            <FormInput
              invalid={Boolean(errors["title"])}
              type="text"
              name="title"
              value={values["title"]}
              placeholder="Title"
              onChange={onChange}
            />
            {errors["title"] && (
              <FormFeedback invalid={Boolean(errors["title"])}>
                {errors["title"].message}
              </FormFeedback>
            )}
          </InputGroup>
        </td>
        <td>
          <InputGroup>
            <FormSelect
              invalid={Boolean(errors["gender"])}
              type="text"
              name="gender"
              value={values["gender"]}
              placeholder="Gender"
              onChange={onChange}
            >
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </FormSelect>
            {errors["gender"] && (
              <FormFeedback>{errors["gender"].message}</FormFeedback>
            )}
          </InputGroup>
        </td>
        <td>
          <InputGroup>
            <FormInput
              invalid={Boolean(errors["capacity"])}
              type="text"
              name="capacity"
              value={values["capacity"]}
              placeholder="Capacity"
              onChange={onChange}
            />
            {errors["capacity"] && (
              <FormFeedback>{errors["capacity"].message}</FormFeedback>
            )}
          </InputGroup>
        </td>
        <td className="d-flex flex-nowrap">
          <span
            onClick={onCencel}
            className="material-icons text-danger text-button"
          >
            close
          </span>
          <button
            onClick={handleSubmit(onSave)}
            className="remove-button  ml-4"
          >
            <span className="material-icons text-primary text-button">
              save
            </span>
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
}
export default ElementTableEdit;
