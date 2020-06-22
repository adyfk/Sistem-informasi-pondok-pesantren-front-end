import React from "react";

function ElementTableView({
  index,
  name,
  studentIn,
  dateOfBirth,
  phoneNumber,
  email,
  onDelete
}) {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{new Date(studentIn).toDateString()}</td>
      <td>{new Date(dateOfBirth).toDateString()}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td className="bg-white">
        <span onClick={onDelete} className="text-danger h6 text-button">
          Keluar
        </span>
      </td>
    </tr>
  );
}

export default ElementTableView;
