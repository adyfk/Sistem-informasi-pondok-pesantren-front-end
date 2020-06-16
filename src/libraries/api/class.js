import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class ClassX {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  getClass = () => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    uri: `${this.#url}/`
  });

  createClass = ({ params }) => ({
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

  updateClass = ({ id, params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "put",
    params,
    uri: `${this.#url}/${id}`
  });
}

export default new ClassX("class");
