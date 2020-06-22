import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Address {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  province = () => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    uri: `${this.#url}/province`
  });

  regency = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/regency`
  });

  district = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/district`
  });
}

export default new Address("address");
