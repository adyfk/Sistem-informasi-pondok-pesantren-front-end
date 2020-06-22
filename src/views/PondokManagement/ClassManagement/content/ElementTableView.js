import React from "react";
import { toLocalString } from "../../../../utils/string";
import { Link } from "react-router-dom";

function ElementTableView({ id, index, title, cost, onEdit, onView }) {
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
        <Link to={`class-management/santri?id=${id}`}>
          <span className="material-icons text-primary text-button ml-4">
            more
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default ElementTableView;
