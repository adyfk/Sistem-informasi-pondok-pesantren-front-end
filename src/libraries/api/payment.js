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
}

export default new Payment("payment");
