import React from "react";

function ElementTableView({
  index,
  name,
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
        <span onClick={onDelete} className="text-primary h6 text-button">
          Detail
        </span>
      </td>
    </tr>
  );
}

export default ElementTableView;
