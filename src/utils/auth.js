import dotenv from "dotenv";
import { lSgetItem, lSsetItem } from "./localstorage";
dotenv.config();

export const checkAuth = ({ auth, history }) => {
  if (process.env.AUTH_MIDDLEWARE === "0") return;
  if (
    auth &&
    !lSgetItem({ name: "token" }) &&
    !window.location.pathname.includes("/login")
  ) {
    history.push("/login");
  }

  if (
    lSgetItem({ name: "token" }) &&
    window.location.pathname.includes("/login")
  ) {
    history.push("/");
  }
};

export const getToken = () => {
  return lSgetItem({ name: "token" });
};
export const setToken = token => {
  return lSsetItem({ name: "token", value: token });
};
