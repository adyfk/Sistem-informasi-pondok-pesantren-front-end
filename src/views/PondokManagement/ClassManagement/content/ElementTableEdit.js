import React from "react";
import { InputGroup, FormInput, FormFeedback } from "shards-react";
import * as yup from "yup";
import useForm from "../../../../libraries/form";

const BedroomSchema = yup.object().shape({
  title: yup.string().required(),
  cost: yup.number().required()
});

function ElementTableEdit({ index, title, cost, onCencel, onSave }) {
  const { errors, values, onChange, handleSubmit } = useForm({
    defaultValues: {
      title,
      cost
    },
    schema: BedroomSchema
  });
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
            <FormInput
              invalid={Boolean(errors["cost"])}
              type="text"
              name="cost"
              value={values["cost"]}
              placeholder="Spp"
              onChange={onChange}
            />
            {errors["cost"] && (
              <FormFeedback>{errors["cost"].message}</FormFeedback>
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
