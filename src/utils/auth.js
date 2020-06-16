import dotenv from 'dotenv'
import { lSgetItem, lSsetItem } from "./localstorage";
dotenv.config()

export const checkAuth = ({ auth, history }) => {
  if(process.env.AUTH_MIDDLEWARE==='0')
    return  
  if (auth && !lSgetItem({ name: "token" })) {
    history.push("/login");
  }
};

export const getToken = () => {
  return lSgetItem({ name: "token" });
};
export const setToken = (token) => {
  return lSsetItem({ name: "token",value: token });
};
