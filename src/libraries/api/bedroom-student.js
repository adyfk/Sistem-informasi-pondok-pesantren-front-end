import { getToken } from "../../utils/auth";
import { BASE_URL } from "./endpoint";

class BedroomStudent {
  #url = "";

  constructor(path) {
    this.#url = `${BASE_URL + path}`;
  }

  getStudentByRoomId = ({ id }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    uri: `${this.#url}/${id}/student`
  });
  checkoutStudent = ({ id }) => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "put",
    uri: `${this.#url}/${id}/checkout`
  });
  getStudentNis = params => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "get",
    params,
    uri: `${this.#url}/student`
  });
  adStudentToBedroom = params => ({
    additionalHeader: {
      Authorization: `Bearer ${getToken()}`
    },
    method: "post",
    params,
    uri: `${this.#url}/`
  });
}

export default new BedroomStudent("student-bedroom");
