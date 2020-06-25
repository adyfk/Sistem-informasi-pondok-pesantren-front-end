import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class Document {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  upload = ({ params }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "post",
    params,
    uri: `${this.#url}/upload`
  });
}

export default new Document("document");
