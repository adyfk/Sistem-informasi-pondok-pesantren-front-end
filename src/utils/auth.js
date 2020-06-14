import { lSgetItem } from "./localstorage";

export const checkAuth = ({ auth, history }) => {
  if (auth && !lSgetItem({ name: "token" })) {
    history.push("/login");
  }
};

export const getToken = () => {
  return lSgetItem({ name: "token" });
};
