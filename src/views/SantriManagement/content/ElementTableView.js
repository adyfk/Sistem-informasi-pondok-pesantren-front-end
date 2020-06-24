import React from "react";
import { Link } from "react-router-dom";

function ElementTableView({
  index,
  name,
  id,
  gender,
  dateOfBirth,
  phoneNumber,
  email,
  onDetail,
  onDelete
}) {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{gender === "L" ? "Laki-laki" : "Perempuan"}</td>
      <td>{new Date(dateOfBirth).toDateString()}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td className="bg-white">
        <Link to={`/santri-management/detail?id=${id}`}>
          <span onClick={onDelete} className="text-primary h6 text-button">
            Detail
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default ElementTableView;
