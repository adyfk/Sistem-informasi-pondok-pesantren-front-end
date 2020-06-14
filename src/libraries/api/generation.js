import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Generation {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  getGeneration = () => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    uri: `${this.#url}/latest`
  });

  getDetailGeneration = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/detail`
  });

  updateDetailGeneration = ({ id, params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "put",
    params,
    uri: `${this.#url}/detail/${id}`
  });

  deleteDetailGeneration = ({ id, params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "delete",
    params,
    uri: `${this.#url}/detail/${id}`
  });
}

export default new Generation("generation");
