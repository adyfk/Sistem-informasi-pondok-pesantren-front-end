import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class User {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  login = ({ params }) => ({
    method: "post",
    params,
    uri: `${this.#url}/login`
  });

  profile = () => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    uri: `${this.#url}/profile`
  });
}

export default new User("user");
