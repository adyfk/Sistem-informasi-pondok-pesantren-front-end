import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Santri {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  getSantri = params => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/`
  });
}

export default new Santri("santri");
