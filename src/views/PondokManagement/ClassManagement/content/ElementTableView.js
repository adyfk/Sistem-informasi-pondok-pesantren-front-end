import React from "react";
import { toLocalString } from "../../../../utils/string";

function ElementTableView({ index, title, cost, onEdit }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>
        <small>Rp</small>
        {` ` + toLocalString(cost)}
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
