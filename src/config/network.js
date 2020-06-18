import axios from "axios";

export const callAPIs = ({ method, uri, params, additionalHeader }) => {
  const url = `${uri}`;
  const headers = { ...additionalHeader };
  const dataOrParams = ["GET", "DELETE"].includes(method.toUpperCase())
    ? "params"
    : "data";
  const defaultConfig = { method, headers, url };
  const config = { ...defaultConfig, [dataOrParams]: params };

  return new Promise(async (res, rej) => {
    try {
      const response = await axios(config);
      res(response.data);
    } catch (error) {
      error.response?.status === 401 && (window.location.href = "/login");
      rej(error.response?.data);
    }
  });
};
