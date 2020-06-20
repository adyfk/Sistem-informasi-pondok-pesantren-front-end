import React from "react";
import { toLocalString } from "../../../../utils/string";

function ElementTableView({ index, title, cost, onEdit, onView }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>
        <small>Rp</small>
        {` ` + toLocalString(cost)}
      </td>
      <td>
        <span
          onClick={onEdit}
          className="material-icons text-warning text-button"
        >
          create
        </span>
        <span
          onClick={onView}
          className="material-icons text-primary text-button ml-4"
        >
          more
        </span>
      </td>
    </tr>
  );
}

export default ElementTableView;
