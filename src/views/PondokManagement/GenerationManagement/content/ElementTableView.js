import React from "react";

function ElementTableView({
  index,
  title,
  description,
  cost,
  onEdit,
  onDelete
}) {
  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <small>Rp</small> {cost?.toLocaleString()}
      </td>
      <td className="d-flex flex-nowrap">
        <span
          onClick={onEdit}
          className="material-icons text-warning text-button"
        >
          create
        </span>
        <span
          onClick={onDelete}
          className="material-icons text-danger text-button ml-4"
        >
          delete
        </span>
      </td>
    </tr>
  );
}

export default ElementTableView;
