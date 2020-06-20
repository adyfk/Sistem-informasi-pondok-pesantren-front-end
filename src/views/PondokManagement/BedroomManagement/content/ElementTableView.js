import React from "react";

function ElementTableView({ index, title, gender, capacity, onEdit, onView }) {
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
