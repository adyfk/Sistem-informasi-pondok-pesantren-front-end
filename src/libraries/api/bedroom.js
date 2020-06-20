import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Bedroom {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  getBedroom = (id = "") => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    uri: `${this.#url}/${id}`
  });

  createBedroom = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "post",
    params: {
      ...params,
      cost: parseInt(params.cost)
    },
    uri: `${this.#url}/`
  });

  updateBedroom = ({ id, params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "put",
    params,
    uri: `${this.#url}/${id}`
  });
}

export default new Bedroom("bedroom");
