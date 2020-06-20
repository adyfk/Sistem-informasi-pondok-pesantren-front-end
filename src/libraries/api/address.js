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

  dorp = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/dorp`
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
