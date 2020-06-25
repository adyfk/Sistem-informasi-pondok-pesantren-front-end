import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Santri {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  getSantri = (params, path = "") => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/${path}`
  });

  saveSantri = params => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "post",
    params,
    uri: `${this.#url}/`
  });

  updateSantri = params => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "put",
    params,
    uri: `${this.#url}/`
  });

  updateParent = (params, studentId = "") => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "put",
    params,
    uri: `${this.#url}/${studentId}/parent`
  });

  updateDocument = (params, studentId = "") => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "put",
    params,
    uri: `${this.#url}/${studentId}/document`
  });
}

export default new Santri("santri");
