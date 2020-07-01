import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Payment {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  getBill = params => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/student`
  });

  getDetailBill = paymentId => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    uri: `${BASE_URL}payment-detail/${paymentId}`
  });

  payBill = params => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "post",
    params,
    uri: `${BASE_URL}payment-detail/`
  });
}

export default new Payment("payment");
