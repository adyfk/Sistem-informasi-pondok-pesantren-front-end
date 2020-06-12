export const lSsetItem = ({ name, value }) => {
  localStorage.setItem(name, value);
};
export const lSgetItem = ({ name }) => {
  return localStorage.getItem(name);
};
export const lSremoveItem = ({ name }) => {
  localStorage.removeItem(name);
};
export const lSclear = () => {
  localStorage.clear();
  window.location.pathname = "/login";
};
