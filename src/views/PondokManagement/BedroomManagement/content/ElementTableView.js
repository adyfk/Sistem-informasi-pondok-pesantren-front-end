import React from "react";
import { Link } from "react-router-dom";

function ElementTableView({
  index,
  id,
  title,
  gender,
  capacity,
  onEdit,
  onView
}) {
  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>{gender === "P" ? "Perempuan" : "Laki-laki"}</td>
      <td>
        {capacity + ` `}
        <small>Orang</small>
      </td>
      <td>
        <span
          onClick={onEdit}
          className="material-icons text-warning text-button"
        >
          create
        </span>
        <Link tag={Link} to={`bedroom-management/santri?id=${id}`}>
          <span
            onClick={onView}
            className="material-icons text-primary text-button ml-4"
          >
            more
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default ElementTableView;
