import React from "react";
import { toLocalString } from "../../../utils/string";
// import { Link } from "react-router-dom";

function ElementTableView({
  index,
  PaymentType,
  description,
  bill,
  paid,
  createdAt,
  onDetail
}) {
  return (
    <tr>
      <td>{index}</td>
      <td>{PaymentType.title}</td>
      <td>{description}</td>
      <td>
        <small>Rp</small>
        {toLocalString(bill)}
      </td>
      <td>
        <small>Rp</small>
        {toLocalString(parseInt(paid || 0))}
      </td>
      <td>
        <span
          className={`badge badge-${
            bill - parseInt(paid) <= 0 ? "success" : "danger"
          }`}
        >
          {bill - parseInt(paid) <= 0 ? "Lunas" : "Belum Lunas"}
        </span>
      </td>
      <td>{new Date(createdAt).toDateString()}</td>
      <td className="bg-white">
        {/* <Link to={`/santri-management/detail?id=${id}`}> */}
        <span onClick={onDetail} className="text-primary h6 text-button">
          Detail
        </span>
        {/* </Link> */}
      </td>
    </tr>
  );
}

export default ElementTableView;
