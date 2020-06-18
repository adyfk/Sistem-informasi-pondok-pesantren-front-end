import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Address {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  province = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/province`
  });

  dorp = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params: {
      ...params,
      cost: parseInt(params.cost)
    },
    uri: `${this.#url}/drop`
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
