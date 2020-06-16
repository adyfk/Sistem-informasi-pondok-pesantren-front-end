import React from "react";

function ElementTableView({ index, title, cost, onEdit }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>
        <small>Rp</small>
        {` ` + cost}
      </td>
      <td className="d-flex flex-nowrap">
        <span
          onClick={onEdit}
          className="material-icons text-warning text-button"
        >
          create
        </span>
      </td>
    </tr>
  );
}

export default ElementTableView;
